// const { MessageEmbed } = require("discord.js");
///const { premium } = require("../../config.json")
// module.exports = {
//   name: "nowplaying",
//   aliases: ["np"],
//   inVoiceChannel: false,
//   run: (client, message) => {
    // if(!premium.includes(message.author.id)) return message.reply("This command currently premium");
//     const { channel, guild, author } = message;
//     const joining = message.member.voice.channel;
//       if (!joining) return message.reply("`❌` You must be in a voice channel")

//     const queue = client.distube.getQueue(guild.id);

//     if (!queue) {
//       channel.send("There's no available song inside the Queue.");
//       return;
//     }

//     const song = queue.songs[0];

//     const embeds = new MessageEmbed()
//       .setAuthor("Now Playing", author.avatarURL())
//       .setColor("BLUE")
//       .setDescription(`[**${song.name}**](${song.url})`)
//       .addFields(
//         {
//           name: "Channel",
//           value: song.uploader.name,
//           inline: true
//         },
//         {
//           name: "Duration",
//           value: song.formattedDuration,
//           inline: true
//         },
//         {
//           name: "Requested By",
//           value: song.user,
//           inline: true
//         }
//       )
//       .setThumbnail(song.thumbnail)
//       .setTimestamp();

//     channel.send({embeds:[embeds]});
//   }
// };
const { MessageEmbed } = require("discord.js")
//const createBar = require("string-progressbar")
const { toColonNotation } = require("colon-notation")
module.exports = {
  name: "Nowplaying",
  aliases: ["nowplaying","np"],
  description: "On play song",

    run: async (client, message) => {
        if (!message.member.voice.channel) return message.reply("You have to enter the voice channel first.")
        const queue = client.distube.getQueue(message)
        if (!queue) return message.reply("There are no songs in the queue.")
        if (!queue && !client.distube.isPlaying(message)) return message.reply("Are you listening?!")
        const song = queue.songs[0]
        const name = song.name
        const user = song.user.tag
        const avatar = song.user.displayAvatarURL({ dynamic: true, format: "png" })
        const link = song.url
        const time = song.duration * 1000
        const currenttime = queue.currentTime
        const tn = song.thumbnail
        const remaining = (time - currenttime) < 0 ? "◉ LIVE" : time - currenttime

        const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "Full iteration" : "Only one song" : "Off"}\` | Auto play : \`${queue.autoplay ? "On" : "Off"}\``

        try {
            const embed = new MessageEmbed()
                .setColor(message.guild.me.displayHexColor)
                .setAuthor(user, avatar)
                .setTitle("Now Playing")
                .addField("Song",`[${song.name}](${song.url})`)
                //.setURL(`${link}`)
                .addField("Duration",`• Duration Remaining : \`[${queue.formattedCurrentTime}/${song.formattedDuration}]\`\n` +
                `${time === 0 ? "" : `• Time Remaining : \`[${toColonNotation(remaining)}]\``}`)
                 .addField("Statement", `${status(queue)}`)
                 .setFooter(`Playing Media`)

//${createBar(time === 0 ? currenttime : time, currenttime, 25)[0]} 
//${client.distube.isPaused(message) === true ? "LOOK" : "AO"} 
            if (!song.thumbnail === null) {
                embed.setThumbnail(`${tn}`)
            }
            message.channel.send({embeds:[embed]})
        } catch (e) {
            message.react("<:False:823030995053576232>")
        }
    }
}
