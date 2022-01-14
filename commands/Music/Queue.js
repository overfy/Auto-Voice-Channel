//const { premium } = require("../../config.json")
// const { MessageButton, MessageActionRow } = require("discord.js");
// const Discord = require("discord.js")
// let buttonPrev = new Discord.MessageButton()
//   .setStyle("grey")
//   .setLabel("Prev")
//   .setID("button_prev");

// let buttonNext = new Discord.MessageButton()
//   .setStyle("grey")
//   .setLabel("Next")
//   .setID("button_next");

// let buttons = new Discord.MessageActionRow().addComponents(buttonPrev, buttonNext);

// module.exports = {
//   name: "queue",
//   aliases: ["q"],
//   inVoiceChannel: false,
//   run: (client, message) => {
    // if(!premium.includes(message.author.id)) return message.reply("This command currently premium");
//     const { channel, guild } = message;

//     let queueMessage = "```elm";
//     const queue = client.distube.getQueue(guild.id);

//     if (!queue) {
//       channel.send("Queue is Empty.");
//       return;
//     }

//     const limit = 10;
//     const totalPages = Math.ceil(queue.songs.length / limit);

//     if (totalPages <= 1) {
//       queue.songs.forEach((song, idx) => {
//         const songName = song.name.replace(/\'/g, "");
//         queueMessage += `\n${idx + 1}) ${songName} ${song.formattedDuration}`;
//       });
//       return channel.send(`${queueMessage} \`\`\``);
//     }

//     let currentPage = 1;
//     let pagination = currentPage * limit - limit;

//     channel.send(
//       showQueueMessage(queue, pagination, currentPage, limit),
//       buttonNext
//     );

//     client.on("clickButton", async (button) => {
//       if (button.id === "button_prev") {
//         await button.reply.defer();
//         currentPage--;
//         pagination = currentPage * limit - limit;

//         if (currentPage === 1) {
//           button.message.edit(
//             showQueueMessage(queue, pagination, currentPage, limit),
//             buttonNext
//           );
//           return;
//         }

//         button.message.edit(
//           showQueueMessage(queue, pagination, currentPage, limit),
//           buttons
//         );
//       }

//       if (button.id === "button_next") {
//         await button.reply.defer();
//         currentPage++;
//         pagination = currentPage * limit - limit;

//         if (currentPage === totalPages) {
//           button.message.edit(
//             showQueueMessage(queue, pagination, currentPage, limit),
//             buttonPrev
//           );
//           return;
//         }

//         button.message.edit(
//           showQueueMessage(queue, pagination, currentPage, limit),
//           buttons
//         );
//       }
//     });
//   }
// };

// const showQueueMessage = (queue, pagination, currentPage, limit) => {
//   queueMessage = "```elm";
//   for (let i = pagination; i < currentPage * limit; i++) {
//     const song = queue.songs[i];

//     if (!song) break;

//     const songName = song.name.replace(/\'/g, "");
//     queueMessage += `\n${i + 1}) ${songName} ${song.formattedDuration}`;
//   }

//   return queueMessage + "```";
// };


const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "queue",
    aliases: ["q"],
    inVoiceChannel: true,
    run: async (client, message) => {
        const { channel, guild } = message;
        try {
            const queue = client.distube.getQueue(message)
            if (!queue) return message.inlineReply("There are no songs in the queue!")
            const q = queue.songs.map((song, i) => {
                return `${i === 0 ? `- Playing [${song.name}](${song.url}) [${song.formattedDuration}]\n` : `${i}. ${song.name} [${song.formattedDuration}]`}`
            }).join("\n")

const embed = new MessageEmbed()
.setColor(message.guild.me.displayHexColor)
.setTitle("Guild Queue")
.setDescription(`${q}`, { code: "markdown" })

            message.channel.send({embeds:[embed]})
        } catch (e) {
            message.channel.send(`An error has occurred, data cant be execute`)
        }
    }
}