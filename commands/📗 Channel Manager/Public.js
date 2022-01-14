const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "public",
    description: "Public the channel with user limit 0",
    aliases: ["unlock"],
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
        
if (message.member.voice.channel) {
  let ika = new MessageEmbed()
  .setTitle("Channel Edited")
  .setDescription(`\`🔒\` Channel already Public by **${message.author.username}**, Tadaa`)
  .setFooter(`© ${message.guild.name} 2021`)
  .setColor("GREEN")
  
  message.reply({embeds:[ika]})     
  let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
  for (const [memberID, member] of channel.members) {
    message.member.voice.channel.setUserLimit(0);  
  }
} 
}
}