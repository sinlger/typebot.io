$en = Get-Content "$PSScriptRoot\en.json" -Raw -Encoding UTF8 | ConvertFrom-Json
$zh = Get-Content "$PSScriptRoot\zh-CN.json" -Raw -Encoding UTF8 | ConvertFrom-Json

$enKeys = $en.PSObject.Properties.Name
$zhKeys = $zh.PSObject.Properties.Name
Write-Output "EN keys: $($enKeys.Count) / ZH keys: $($zhKeys.Count)"

$missing = $enKeys | Where-Object { $zhKeys -notcontains $_ }
Write-Output "--- Missing in zh-CN ($($missing.Count)) ---"
$missing

$extra = $zhKeys | Where-Object { $enKeys -notcontains $_ }
Write-Output "--- Extra in zh-CN ($($extra.Count)) ---"
$extra

# zh values identical to en AND containing 3+ latin letters (likely untranslated)
$untranslated = foreach ($p in $zh.PSObject.Properties) {
  $v = [string]$p.Value
  $env = [string]$en.($p.Name)
  if ($v -eq $env -and $v -match '[a-zA-Z]{3,}' -and $v -notmatch '^(https?://|www\.)') {
    "$($p.Name) = $v"
  }
}
Write-Output "--- zh value identical to en with latin words ($($untranslated.Count)) ---"
$untranslated
