exports.run = async (client, message) => {
const discord = require('discord.js')
let ajuda= new discord.RichEmbed()
.setTitle('Ajuda')
.setDescription('Todos os meus comandos:')
.addField('\`Ajuda\` / \`help\` / \`?\`', 'Manda esta mensagem.')
.addField('\`Botinfo\` / \`bot\` / \`infobot\`', 'Envia as informações do bot.')
.addField('\`Serverstatus\` / \`svstatus\` / \`statussv\` / \`server\` / \`sv\` / \`status\`', 'Disponibiliza as informações do servidor.')
    message.channel.send(ajuda)
}
module.exports.help = {
    name: "ajuda",
    aliases: ["?", "help"]
}    