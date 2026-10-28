@echo off
cd /d "%~dp0"
if not exist "node_modules\electron\dist\electron.exe" (
  echo Electron not installed. Run: npm install
  pause
  exit /b 1
)
if not exist "dist\index.html" (
  call npm run build
)
start "" "node_modules\electron\dist\electron.exe" .
