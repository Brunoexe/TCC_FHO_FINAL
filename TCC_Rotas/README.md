# Configurações

## Configurações para executar o app

Para executar o app, você precisará ter instalado em sua máquina o Android Studio com um emulador configurado com SDK mínima 21. Com isso, basta executar no terminal na pasta raiz do projeto o comando

`npm run android`

## Configurações para o app Tracker

Como foi discutido a implementação de alguns marcadores fixos, a configuração para isso foi feita no arquivo *default_markers.ts* no diretório *src/app/assets* . As imagens referentes aos marcadores estão sendo armazenadas em *src/app/assets/markerImages* .

Esse arquivo possui uma lista de objetos, onde cada objeto possui a latitude e longitude do marcador e a imagem referente. As imagens devem ser importadas nesse arquivo e passadas como parâmetro na propriedade image da função Image.resolveAssetSource(*IMAGEM*).uri . Todos os detalhes da notação desse objeto está sendo exemplificada no próprio arquivo *default_markers.ts*, onde foi deixado alguns marcadores definidos como exemplo.
