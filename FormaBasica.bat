
for /f %%x in ('powershell Get-Date -Format "yyyyMMdd-HHmmss"') do set "mensaje=backend-%%x"
start cmd.exe /k "cd C:\Users\nicolas\Desktop\BACKNODE\BackendTrabajo & git add . & git commit -m %mensaje% & git remote add origin 'http://github.com/raijon01/backend_asistencia' & git push origin master" 

