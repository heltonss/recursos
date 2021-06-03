#!/bin/bash

echo " ____                              _      "
echo "| __ )  __ _ _ __   ___ ___     __| | ___ "
echo "|  _ \ / _\` | '_ \ / __/ _ \   / _\` |/ _ \\"
echo "| |_) | (_| | | | | (_| (_) | | (_| |  __/"
echo "|____/ \__,_|_| |_|\___\___/   \__,_|\___|"
echo "                                          "
echo " ___                                      "
echo "|_ _|_ __ ___   __ _  __ _  ___ _ __  ___ "
echo " | || '_ \` _ \ / _\` |/ _\` |/ _ \ '_ \/ __|"
echo " | || | | | | | (_| | (_| |  __/ | | \__ \\"
echo "|___|_| |_| |_|\__,_|\__, |\___|_| |_|___/"
echo ''
echo ''
echo "  ____                            _     _           _      "
echo " / ___|___  _ __ ___  _   _ _ __ (_) __| | __ _  __| | ___ "
echo "| |   / _ \| '_ \` _ \| | | | '_ \| |/ _\` |/ _\` |/ _\` |/ _ \\"
echo "| |__| (_) | | | | | | |_| | | | | | (_| | (_| | (_| |  __/"
echo " \____\___/|_| |_| |_|\__,_|_| |_|_|\__,_|\__,_|\__,_|\___|"
echo "                                                   "
echo " ____             ____                             "
echo "|  _ \  _____   _|  _ \ __ _ _ __ __ _ _ __   __ _ "
echo "| | | |/ _ \ \ / / |_) / _\` | '__/ _\` | '_ \ / _\` |"
echo "| |_| |  __/\ V /|  __/ (_| | | | (_| | | | | (_| |"
echo "|____/ \___| \_/ |_|   \__,_|_|  \__,_|_| |_|\__,_|"

echo ''
echo ''
echo '🔥 - Iniciando normalização de arquivos para mapeamento'
echo ''

sleep 2

for f in assets/photos/**/*.jpeg; do
  file=$(echo $f | sed 's/ /\-/' | sed 's/,//' | sed 's/ /_/' | sed 's/ /-/' | tr ' ' "-" | tr '[:upper:]' '[:lower:]')
  echo "$f" "$file"
  mv "$f" "$file"
done

echo ''
echo '✅  Base de dados normalizada'
echo ''
echo ''
echo '🔥 - Iniciando mapeamento'
echo ''

tree -L 3 -J assets/photos > apps/devector/src/assets/photos.json

echo '✅  Mapeamento concluído'
echo ''
echo ''
echo '🔥  Formatando mapa de arquivos'
echo ''
npx prettier apps/devector/src/assets/photos.json --write
echo ''
echo '✅ - Tudo pronto!'
echo ''
echo ''
echo 'Bye ;)'




