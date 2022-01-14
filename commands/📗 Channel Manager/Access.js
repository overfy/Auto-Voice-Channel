const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "access",
    description: "Give access to member",
    aliases: ["acc"],
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
  try {
        let user = message.mentions.members.first()
        //if (user === message.member.has(user.bot)) return message.reply("`❌` You cannot access bot to manage")
        if (!user) return message.reply("`❌` Please mention user to get access the channel")

        if (!message.member.permissionsIn(channel).has('MANAGE_CHANNELS'))
            return message.reply('`🔒` Channel is owned');

        if (!message.guild.me.permissionsIn(channel).has('MANAGE_CHANNELS'))
            return message.reply('`🔒` I dont have authority to manage');

        await channel.permissionOverwrites.edit(user.id, {
            //PERMISSION FOR CHANNEL AUTHOR
            MANAGE_CHANNELS: true,
        })


        let ikan = new MessageEmbed()
            .setTitle("Access Granted")
            .setDescription(`\`✅\` <@${message.member.id}> Give access to <@${user.id}>`)
            .setFooter(`© ${message.guild.name} 2021`)
            .setColor("GREEN")
        throw message.reply({embeds:[ikan]})

    } catch(err) {
        console.log(err)
    }
    }
}