
declare -A proyectos=(
    ["backend"]="C:\Users\nicolas\Desktop\BACKNODE\BackendTrabajo:https://github.com/raijon01/backend_asistencia"
    ["front_web"]="C:\Users\nicolas\Desktop\BACKNODE\FrontWebAsistencia:https://github.com/raijon01/front_web_asistencia"
    ["front_mobile"]="C:\Users\nicolas\Desktop\BACKNODE\FrontCelular:https://github.com/raijon01/front_mobile_asistencia"
)


for proyecto in "${!proyectos[@]}"; do

    IFS=':' read -r ruta url <<< "${proyectos[$proyecto]}"


    cd "$ruta" || continue


    if [ ! -d ".git" ]; then
        git init
    fi

    # Añade todos los archivos al área de preparación y realiza un commit
    git add .
    git commit -m "Commit automático: $(date)"

    # Conecta el repositorio local al repositorio remoto si no está conectado
    if ! git remote -v | grep -q "origin"; then
        git remote add origin "$url"
    fi

    # Sube los cambios al repositorio remoto
    git push -u origin master

    # Vuelve al directorio raíz
    cd -
done