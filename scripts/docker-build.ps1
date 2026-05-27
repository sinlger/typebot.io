# ============================================================
# Typebot Docker local build script (PowerShell)
# Build project locally first, then Docker only COPY artifacts
# ============================================================
param(
  [ValidateSet("all", "builder", "viewer", "workflows", "landing-page")]
  [string]$Scope = "all"
)

$ErrorActionPreference = "Stop"

Write-Host "==> Installing dependencies..." -ForegroundColor Cyan
bun install --frozen-lockfile

if ($Scope -eq "all" -or $Scope -eq "builder") {
  Write-Host "==> Building builder..." -ForegroundColor Cyan
  $env:SKIP_ENV_CHECK = "true"
  $env:DATABASE_URL = "postgresql://"
  $env:NEXT_PUBLIC_VIEWER_URL = "http://localhost"
  bunx nx build builder
}

if ($Scope -eq "all" -or $Scope -eq "viewer") {
  Write-Host "==> Building viewer..." -ForegroundColor Cyan
  $env:SKIP_ENV_CHECK = "true"
  $env:DATABASE_URL = "postgresql://"
  $env:NEXT_PUBLIC_VIEWER_URL = "http://localhost"
  bunx nx build viewer
}

if ($Scope -eq "all" -or $Scope -eq "workflows") {
  Write-Host "==> Building workflows..." -ForegroundColor Cyan
  Push-Location apps/workflows
  bun run build
  Pop-Location
}

if ($Scope -eq "all" -or $Scope -eq "landing-page") {
  Write-Host "==> Building landing-page-v2..." -ForegroundColor Cyan
  $env:VITE_LANDING_PAGE_BASE_URL = "http://localhost:8003"
  $env:VITE_TYPEBOT_APP_BASE_URL = "http://localhost:8000"
  bunx nx build landing-page-v2
}

Write-Host "==> Generating Prisma Client..." -ForegroundColor Cyan
$env:DATABASE_URL = "postgresql://"
bunx nx db:generate prisma

Write-Host ""
Write-Host "==============================" -ForegroundColor Green
Write-Host " Build complete! You can now run:"
Write-Host " docker build -f Dockerfile.builder -t typebot-builder ."
Write-Host " docker build -f Dockerfile.viewer -t typebot-viewer ."
Write-Host " docker build -f apps/workflows/Dockerfile -t typebot-workflows ."
Write-Host " docker build -f Dockerfile.landing-page-v2 -t typebot-landing-page ."
Write-Host "==============================" -ForegroundColor Green
