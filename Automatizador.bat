
@echo off

rem Define la lista de proyectos con sus rutas completas y sus respectivas URLs de repositorio remoto
set "proyectos=C:\Users\nicolas\Desktop\BACKNODE\backend,BackendTrabajo:https://github.com/raijon01/backend_asistencia front_web,C:\Users\nicolas\Desktop\BACKNODE\FrontWebAsistencia:https://github.com/raijon01/front_web_asistencia front_mobile,C:\Users\nicolas\Desktop\BACKNODE\FrontCelular:https://github.com/raijon01/front_mobile_asistencia"
echo Hola
rem Itera sobre cada proyecto
for %%P in (%proyectos%) do (
    rem Separa la ruta completa y la URL del repositorio remoto
    for /f "tokens=1,2 delims=," %%A in ("%%P") do (
        set "ruta=%%A"
        set "url=%%B"
    )
    set /p directorio="Por favor, ingrese la ruta del directorio donde desea crear la carpeta: "
    ECHO bucle
    rem Navega al directorio del proyecto
    cd /d "!ruta!" || exit /b

    rem Inicializa el repositorio Git si no está inicializado
    if not exist ".git" git init

    rem Añade todos los archivos al área de preparación y realiza un commit
    git add .
    git commit -m "Commit automático: %date% %time%"

    rem Conecta el repositorio local al repositorio remoto si no está conectado
    git remote -v | findstr "origin" || git remote add origin "!url!"

    rem Sube los cambios al repositorio remoto
    git push -u origin master

    rem Vuelve al directorio raíz
    cd /d "%~dp0"
)
