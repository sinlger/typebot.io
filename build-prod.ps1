# build-prod.ps1 — 加载 .env.prod 并按生产配置构建 builder/viewer/workflows/landing
$ErrorActionPreference = "Continue"
Set-Location E:\workSpace\qinglbot
$log = "E:\workSpace\qinglbot\logs\build-prod.log"
if (!(Test-Path "E:\workSpace\qinglbot\logs")) { New-Item -ItemType Directory "E:\workSpace\qinglbot\logs" | Out-Null }
"===== BUILD START $(Get-Date -Format o) =====" | Tee-Object -FilePath $log

# --- 解析 .env.prod 注入环境变量 ---
Get-Content "E:\workSpace\qinglbot\.env.prod" | ForEach-Object {
  $line = $_.Trim()
  if ($line -eq "" -or $line.StartsWith("#")) { return }
  $eq = $line.IndexOf("=")
  if ($eq -lt 1) { return }
  $key = $line.Substring(0, $eq).Trim()
  $val = $line.Substring($eq + 1).Trim()
  if (($val.StartsWith('"') -and $val.EndsWith('"')) -or ($val.StartsWith("'") -and $val.EndsWith("'"))) {
    $val = $val.Substring(1, $val.Length - 2)
  }
  [Environment]::SetEnvironmentVariable($key, $val, "Process")
}
"== env injected ==" | Tee-Object -Append -FilePath $log
"VIEWER_URL=$env:NEXT_PUBLIC_VIEWER_URL | SMTP_USER=$env:SMTP_USERNAME | HIDDEN=$env:NEXT_PUBLIC_HIDDEN_BLOCKS" | Tee-Object -Append -FilePath $log

function Run-Build($name, $cmd) {
  "===== [$name] $(Get-Date -Format HH:mm:ss) =====" | Tee-Object -Append -FilePath $log
  Invoke-Expression $cmd 2>&1 | Tee-Object -Append -FilePath $log
  if ($LASTEXITCODE -ne 0) {
    "!!! $name FAILED (exit $LASTEXITCODE)" | Tee-Object -Append -FilePath $log
    return $false
  }
  "--- $name OK ---" | Tee-Object -Append -FilePath $log
  return $true
}

$ok = $true
if (!(Run-Build "builder"   "bunx nx build builder"))   { $ok = $false }
if (!(Run-Build "viewer"    "bunx nx build viewer"))    { $ok = $false }
if (!(Run-Build "workflows" "bunx nx build workflows")) { $ok = $false }
Set-Location E:\workSpace\qinglbot\apps\landing-page-v0
if (!(Run-Build "landing"   "bun run build"))           { $ok = $false }
Set-Location E:\workSpace\qinglbot

"===== BUILD $(if($ok){'ALL OK'}else{'HAS FAILURES'}) $(Get-Date -Format o) =====" | Tee-Object -Append -FilePath $log
exit $(if($ok){0}else{1})
