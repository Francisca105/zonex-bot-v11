exports.run = (client, message, args, err) => {

    var discord = require('discord.js');
    var Discord = require('discord.js');
    var request = require('request');
    var mcIP = 'hypex.phantom.host'

//API MCAPI.US
/*    var url = 'http://mcapi.us/server/status?ip=' + mcIP 

           request(url, function(err, response, body) {
                body = JSON.parse(body);
                if(body.online === false) return message.channel.send('Servidor em manutenção, tente mais tarde.')    

                if(body.online) {
                    let players;
                    if(body.players.now) {
                        players = body.players.now
                    } else {
                        players = '0';
                    }
                }

            let svon = new discord.RichEmbed()
            .setTitle('O servidor está atualmente online! <:esmeralda:680071417613910020>')
            .addField("Ip:", `\`${mcIP}\``)
            .addField("Players:", `\`${body.players.now}/${body.players.max}\``)
            .addField(`Motd:`,`${body.motd}`)
            .addField("Versão:", `\`${body.server.name}\``)
            .setFooter('Bot desenvolvido pela Francisca.105#8965.')
            .setColor('#4efc03')

            if(body.online === true) message.channel.send(svon)
            

                   
           })
    if(err) return message.channel.send('Servidor em manutenção, tente mais tarde.') */

//API.MINETOOLS.EU   
    var url = 'https://api.minetools.eu/query/' + mcIP  
    request(url, function(body) {
        body = JSON.parse(body);
        if(body.error) return message.channel.send('Servidor em manutenção, tente mais tarde.')
        else{
            let sv = new discord.RichEmbed()
            .setTitle('O servidor está atualmente online! <:esmeralda:680071417613910020>')
            .addField("Ip:", `\`${mcIP}\``)
            .addField("Players:", `\`${body.Players}/${body.MaxPlayers}\``)
            
            message.channel.send(sv)
        }
    })
}
module.exports.help = {
        name: "serverstatus",
        aliases: ["svstatus", "statussv", "server", "sv", "status"]
}