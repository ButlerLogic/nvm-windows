@echo off
@REM echo %* > C:\Users\corey\OneDrive\Documents\workspace\libraries\oss\coreybutler\nvm-windows\bin\debug.log
powershell -NoProfile -WindowStyle Hidden -Command "Start-Process -Filepath 'C:\Users\corey\OneDrive\Documents\workspace\libraries\oss\coreybutler\nvm-windows\bin\nvm.exe' -ArgumentList '\"%*\"' -NoNewWindow"