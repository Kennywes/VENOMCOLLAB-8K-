const fs = require('fs');
const chalk = require('chalk');

global.numerodono = "50943098795";
global.nomedono = "`𖠁ൢ᭄͢𝐌ꝛ፝֟🌹𝐊𝚵𝚴𝚸𝚫𝐂𝚮𝚰🌹✞🤴🏽🤍`";
global.prefixo = "♤";
global.packnome = "feito por:\ncriador:\ncanal:";
global.author = "𝑽𝒆𝒏𝒐𝒎𝑪𝒐𝒍𝒍𝒂𝒃 8𝒌\n554388337208\nyoutube.com/@VenomModss";
global.autoGravar = true;
global.autoDigitar = true;
global.autoreDigitarGravar = false;
global.autoVisualizarMsg = false;
global.autobio = true;
global.autovisualizar_status = false;
global.antilink_grupo = true;


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`configurar.js foi atualizado!`))
    delete require.cache[file]
    require(file)
})
