const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!')
})

    client.on('message', message => {
     if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

  

    //console.log(message.content);

     if(message.content.startsWith(`${prefix}Kick`)) {
     //message.channel.send("Kick")
     
     
     let memeber = message.mentions.memebers.first();  
    memeber.kick().then((member) => {
    message.channel.send(":wave: " + member.display.Name + "Has Been Kicked!")
    
   
      })
    }   
    }
   })

client.login(token);