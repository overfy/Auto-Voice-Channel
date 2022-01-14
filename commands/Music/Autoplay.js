const { MessageEmbed } = require("discord.js")
const { premium } = require("../../config.json")


module.exports = {
  name: "Autoplay",
  aliases: ["auto","autoplay"],
  description: "Auto play musical",

    run: async (client, message) => {

        if(!premium.includes(message.author.id)) return message.reply("This command currently premium");
        try {
            if (!message.member.voice.channel) return message.reply("You have to enter the voice channel first.")
            //if (!client.distube.isPlaying(message)) return message.reply("Are you listening?!")
            const mode = client.distube.toggleAutoplay(message)

             const embed = new MessageEmbed()
            .setTitle('Auto play')
            .setColor(message.guild.me.displayHexColor)
            .setDescription(`${(mode ? "<:True:826475694661042206>" : "<:False:823030995053576232>")} \`|\` Autoplay status`)

            message.channel.send({embeds:[embed]})
        } catch (e) {
            message.channel.send(`An error has occurred, data cant be execute`)
        }
    }
}
