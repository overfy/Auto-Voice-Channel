const { MessageEmbed } = require('discord.js');
const color = require('../../config.json')

module.exports = {
    name: "channelinfo",
    description: "Channel information",
    aliases: ["channel"],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
  
         let nsfwV = message.channel.nsfw ? 'nsfw' : 'not nsfw';
         let today = new Date().toISOString().slice(0, 10)
        let channel = message.member.voice.channel || message.channel ||message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!channel) return message.inlineReply("Please mention a Channel or ID");

        let channelembed = new MessageEmbed()
            .setTitle(`Channel Information`)
            .setThumbnail(message.guild.iconURL())
            .addField("`🟢` Overview",`
└| Channel name is \`${channel.name}\`
└| Channel is ${nsfwV}
└| Channel type is ${channel.type}
└| Channel limit is ${channel.userLimit || 'no limit requiring'}
└| Channel member count is ${channel.members.size} user(s)
└| Channel bitrate is ${channel.bitrate+'Kbps' || 'no bitrate requiring'}
└| Channel description is ${channel.topic || 'no description'}
└| Channel id is ${channel.id}
            `)
        .setTimestamp()

        .setColor(color.color)
        message.channel.send({embeds:[channelembed]});
      
    
  }
}