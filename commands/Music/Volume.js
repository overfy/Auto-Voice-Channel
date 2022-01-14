const { MessageEmbed } = require("discord.js")
const { premium } = require("../../config.json")

module.exports = {
    name: "volume",
    aliases: ["","vol","v"],
    description: "Manage the volume",
    run: async (client, message, args) => {
        if(!premium.includes(message.author.id)) return message.reply("This command currently premium");
        if (!message.member.voice.channel) return message.inlineReply("You have to enter the voice channel first.")
        const queue = client.distube.getQueue(message)
        if (!queue) return message.inlineReply("There are no songs in the queue.")
        if (!client.distube.isPlaying(message)) return message.inlineReply("Are you listening?!")
        const volume = parseInt(args[0])

const embed = new MessageEmbed()
.setAuthor("Volume Manage")
.setDescription(`Default volume : \`50%\`\nMax volume : \`100%\`\nCurrently volume : \`${queue.volume}%\``)

        if (isNaN(volume) || volume > 100) return message.channel.send({embeds:[embed]})
        try {
            client.distube.setVolume(message, volume)

const embed = new MessageEmbed()
.setDescription(`Set the volume to! ${volume}`)

            message.channel.send({embeds:[embed]})
        } catch (e) {
            console.log(e)
        }
    }
}