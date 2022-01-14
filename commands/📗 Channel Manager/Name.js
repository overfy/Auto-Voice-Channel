const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "name",
    description: "Manage channel name",
    aliases: ["rename","setname"],
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
  

  
   if (!args[0])
      return message.reply("`🔒` Please input the new name")
  
  if (message.member.voice.channel) {
  let name = args.join(' ')  
  
  let ngentot = new MessageEmbed()  
  .setTitle("Channel Edited")
  .setDescription(`Channel Name edited by **${message.author.username}** into **${name}**`)
  .setFooter(`© ${message.guild.name} 2021`)
  .setColor("GREEN")
  message.reply({embeds:[ngentot]})     
             
  for (const [memberID, member] of channel.members) {
    message.member.voice.channel.setName(name);
       
  }
}
}
}