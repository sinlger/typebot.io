# assemble-deploy.ps1 - assemble deploy/dist + Linux native patches + package tar.gz (ASCII only)
$ErrorActionPreference = "Stop"
Set-Location E:\workSpace\qinglbot
$root = "E:\workSpace\qinglbot"
$dist = "$root\deploy\dist"
$patch = "$root\deploy\native-patch"

Write-Host "[1/7] clean deploy/dist..."
if (Test-Path $dist) { Remove-Item $dist -Recurse -Force }
New-Item -ItemType Directory "$dist\builder", "$dist\viewer", "$dist\landing-v0", "$dist\workflows" -Force | Out-Null

Write-Host "[2/7] assemble builder..."
Copy-Item "$root\apps\builder\.next\standalone\*" "$dist\builder\" -Recurse -Force
New-Item -ItemType Directory "$dist\builder\apps\builder\.next" -Force | Out-Null
Copy-Item "$root\apps\builder\.next\static" "$dist\builder\apps\builder\.next\static" -Recurse -Force
Copy-Item "$root\apps\builder\public" "$dist\builder\apps\builder\public" -Recurse -Force

Write-Host "[3/7] assemble viewer..."
Copy-Item "$root\apps\viewer\.next\standalone\*" "$dist\viewer\" -Recurse -Force
New-Item -ItemType Directory "$dist\viewer\apps\viewer\.next" -Force | Out-Null
Copy-Item "$root\apps\viewer\.next\static" "$dist\viewer\apps\viewer\.next\static" -Recurse -Force
Copy-Item "$root\apps\viewer\public" "$dist\viewer\apps\viewer\public" -Recurse -Force

Write-Host "[4/7] assemble landing..."
Copy-Item "$root\apps\landing-page-v0\dist\*" "$dist\landing-v0\" -Recurse -Force

Write-Host "[5/7] assemble workflows..."
Copy-Item "$root\apps\workflows\dist\index.js" "$dist\workflows\index.js" -Force
Copy-Item "$root\deploy\workflows-start.sh" "$dist\workflows\start.sh" -Force

# ---------- Linux native patches ----------
function Patch-Native($appDir) {
  $s = "$dist\$appDir"
  Write-Host "patch ${appDir}: isolated-vm linux prebuild..."
  $ivmPre = "$s\node_modules\isolated-vm\prebuilds\linux-x64"
  New-Item -ItemType Directory $ivmPre -Force | Out-Null
  Copy-Item "$root\node_modules\isolated-vm\prebuilds\linux-x64\*.node" $ivmPre -Force

  Write-Host "patch ${appDir}: sharp linux platform packages..."
  $img = "$s\node_modules\@img"
  foreach ($pkg in @("sharp-linux-x64", "sharp-libvips-linux-x64")) {
    $target = "$img\$pkg"
    if (!(Test-Path $target)) {
      $tgz = if ($pkg -eq "sharp-linux-x64") { "$patch\img-sharp-linux-x64-0.34.4.tgz" } else { "$patch\img-sharp-libvips-linux-x64-1.2.3.tgz" }
      $tmp = "$patch\extract-$pkg"
      if (Test-Path $tmp) { Remove-Item $tmp -Recurse -Force }
      New-Item -ItemType Directory $tmp -Force | Out-Null
      tar.exe -xzf $tgz -C $tmp
      Copy-Item "$tmp\package" $target -Recurse -Force
      Remove-Item $tmp -Recurse -Force
      Write-Host "  -> $target"
    }
  }
}
Patch-Native "builder"
Patch-Native "viewer"

# ---------- package ----------
Write-Host "[6/7] package tar.gz..."
Set-Location $dist
foreach ($d in @("builder", "viewer", "landing-v0", "workflows")) {
  tar.exe -czf "$root\$d-deploy.tar.gz" -C . $d
  if ($LASTEXITCODE -ne 0) { throw "tar failed for $d" }
  Write-Host "  OK $d-deploy.tar.gz"
}
Set-Location $root
Write-Host "[7/7] done:"
Get-ChildItem $root\*.tar.gz | Select-Object Name, @{N='MB';E={[math]::Round($_.Length/1MB,1)}} | Format-Table -AutoSize
