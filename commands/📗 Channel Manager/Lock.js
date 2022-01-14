const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "lock",
    description: "Lock the channel as the user invoice",
    aliases: ["l"],
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
  .setDescription(`\`🔒\` Channel Lock the limit by **${message.author.username}** as the user in voice`)
  .setFooter(`© ${message.guild.name} 2021`)
  .setColor("GREEN")
  
  message.reply({embeds:[ika]})     
  let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
  for (const [memberID, member] of channel.members) {
    message.member.voice.channel.setUserLimit(channel.members.size);  
  }
} 
}
}