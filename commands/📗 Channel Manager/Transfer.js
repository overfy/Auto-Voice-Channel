const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "transfer",
    description: "Transfer the access",
    aliases: ["trf"],
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
        if (!user) return message.reply("`❌` Please mention user to transfer the overwrite permission")

        if (!message.member.permissionsIn(channel).has('MANAGE_CHANNELS'))
            return message.reply('`🔒` Channel is owned');

        if (!message.guild.me.permissionsIn(channel).has('MANAGE_CHANNELS'))
            return message.reply('`🔒` I dont have authority to manage');

        if(user.voice.channel === null || user.voice.channel === undefined) return message.reply(`\`❌\` That person should join to your channel`);

        await channel.permissionOverwrites.delete(message.member.id)
    
        await channel.permissionOverwrites.edit(user.id, {
            //PERMISSION FOR CHANNEL AUTHOR
            STREAM: true,
            CONNECT: true,
            USE_VAD: true,
            MANAGE_CHANNELS: true,
            SPEAK: true,
        })


        let ikan = new MessageEmbed()
            .setTitle("Authority Update")
            .addField("Transfer Rights", `
\`❌\` Previous Owner : <@${message.member.id}>
\`✅\` Current Author : <@${user.id}>
  `)
            .setFooter(`© ${message.guild.name} 2021`)
            .setColor("GREEN")
        throw message.reply({embeds:[ikan]})

    } catch(err) {
        console.log(err)
    }
    }
}