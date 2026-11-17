@echo off
cd /d "%~dp0frontend"
echo Starting PS5 Payload Manager Web Interface (Mock Backend + Vite)...
echo Opening http://localhost:5173 in browser...
start http://localhost:5173
npm run dev:mock
pause

