const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')
const config = require("../../config.json")

module.exports = {
    name: "blacklist",
    description: "Blacklist user from vc",
    aliases: ["bl"],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

let channel = message.member.voice.channel;
if (!channel)
   return message.reply("`🔒` Setting channel on your own channel")

if (!message.member.permissionsIn(channel).has('MANAGE_CHANNELS'))
   return message.reply('`🔒` Channel is owned');

if (!message.guild.me.permissionsIn(channel).has('MANAGE_CHANNELS'))
   return message.reply('`🔒` I dont have authority to manage'); 
  
  
  
 let user = message.mentions.members.first()

let doing = new MessageEmbed()
.setAuthor("Blacklist Voice","https://cdn.discordapp.com/emojis/870629127525392424.png?v=1")
.addField("How to do?",`\`\`\`js
${config.prefix}blacklist <mention>
\`\`\``)
.setFooter("Blacklist Statement")
.setColor()
 if(!user) return message.reply({embeds:[doing]})
  

channel.permissionOverwrites.edit(user, {
  CONNECT: false
})


  let ngentot = new Discord.MessageEmbed()  
  .setTitle("Permission Update")
  .setDescription(`\`🔨\` Now ${user} got blacklist in [\`${channel.name}\`] by **${message.author.username}**. Tadaa`)
  .setFooter(`© ${message.guild.name} 2021`)
  .setColor()
  message.reply({embeds:[ngentot]})     
  
 
}
}