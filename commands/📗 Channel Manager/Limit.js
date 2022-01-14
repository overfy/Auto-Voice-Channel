const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "limit",
    description: "Manage channel limit",
    aliases: ["userlimit","ul","setlimit"],
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
  
if (!args.length || isNaN(args[0]))
  return message.reply("`❌` Please input the limit number")
        
if (message.member.voice.channel) {
  let limit = args.join(' ') || isNaN(args[0])
  if(limit > 99) return message.reply("`❌` Please input the valid limit number 1 - 99 are available")
  //if(limit < 0) return message.reply("`❌` Please input the valid limit number 1 - 99 are available")
  let ika = new MessageEmbed()
  .setTitle("Channel Edited")
  .setDescription(`Channel Limit edited by **${message.author.username}** into **${limit}**`)
  .setFooter(`© ${message.guild.name} 2021`)
  .setColor("GREEN")
  
  message.reply({embeds:[ika]})     
  let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
  for (const [memberID, member] of channel.members) {
    message.member.voice.channel.setUserLimit(limit);  
  }
} 
}
}