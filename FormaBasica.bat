
for /f %%x in ('powershell Get-Date -Format "yyyyMMdd-HHmmss"') do set "mensajeback=backend-%%x"
for /f %%x in ('powershell Get-Date -Format "yyyyMMdd-HHmmss"') do set "mensajefrontweb=frontweb-%%x"
for /f %%x in ('powershell Get-Date -Format "yyyyMMdd-HHmmss"') do set "mensajefrontmobile=frontmobile-%%x"
for /f %%x in ('powershell Get-Date -Format "yyyyMMdd-HHmmss"') do set "mensajeelbueno=elbueno-%%x"

start cmd.exe /k "cd C:\Users\nicolas\Desktop\BACKNODE\BackendTrabajo & git add . & git commit -m %mensajeback% & git push origin master" 
start cmd.exe /k "cd C:\Users\nicolas\Desktop\BACKNODE\FrontWebAsistencia & git add . & git commit -m %mensajefrontweb% & git push origin main" 
start cmd.exe /k "cd C:\Users\nicolas\Desktop\BACKNODE\FrontCelular & git add . & git commit -m %mensajefrontmobile% & git push origin main" 
start cmd.exe /k "cd C:\Users\nicolas\Desktop\BACKNODE\elbueno & git add . & git commit -m %mensajeelbueno% & git push origin main" 
start cmd.exe /k "cd C:\Users\nicolas\Desktop\BACKNODE\apirestsocial & git add . & git commit -m %mensajefrontmobile% & git push origin main" 
start cmd.exe /k "cd C:\Users\nicolas\Desktop\BACKNODE\17-proyecto4 & git add . & git commit -m %mensajeelbueno% & git push origin main" 
start cmd.exe /k "cd C:\Users\nicolas\Desktop\TypeScript\clase-typescript & git add . & git commit -m %mensajeelbueno% & git push origin main" 
start cmd.exe /k "cd C:\Users\nicolas\Desktop\TypeScript\AwesomeTSProject & git add . & git commit -m %mensajeelbueno% & git push origin main" 