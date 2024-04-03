
for /f %%x in ('powershell Get-Date -Format "yyyyMMdd-HHmmss"') do set "mensajeback=backend-%%x"
for /f %%x in ('powershell Get-Date -Format "yyyyMMdd-HHmmss"') do set "mensajefrontweb=frontweb-%%x"
for /f %%x in ('powershell Get-Date -Format "yyyyMMdd-HHmmss"') do set "mensajefrontmobile=frontmobile-%%x"

start cmd.exe /k "cd C:\Users\nicolas\Desktop\BACKNODE\BackendTrabajo & git add . & git commit -m %mensajeback% & git push origin master" 
start cmd.exe /k "cd C:\Users\nicolas\Desktop\BACKNODE\FrontWebAsistencia & git add . & git commit -m %mensajefrontweb% & git push origin main" 
start cmd.exe /k "cd C:\Users\nicolas\Desktop\BACKNODE\FrontCelular & git add . & git commit -m %mensajefrontmobile% & git push origin main" 

