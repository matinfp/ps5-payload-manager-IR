@echo off
cd /d "%~dp0"
echo Starting PS5 Payload Manager Web Interface (Mock Backend + Vite)...
echo Opening http://localhost:5173 in browser...
start http://localhost:5173
npm run dev:mock
pause

