// const { premium } = require("../../config.json")

// const { MessageMenuOption, MessageSelectMenu,  MessageActionRow } = require("discord.js");
// const { MessageEmbed } = require("discord.js");
// const Discord = require("discord.js");
// module.exports = {
//   name: "search",
//   aliases: ["find","sc"],
//   inVoiceChannel: true,
//   run: async (client, message, args) => {
//     if(!premium.includes(message.author.id)) return message.reply("This command currently premium");
//     const { channel, member } = message;

//     if (args.length === 0) {
//       message.reply("Incorrect command usage! type `!search [search string]`");
//       return;
//     }
//     await client.distube.voices.join(member.voice.channel); // Automatically Join Voice Channel

//     const searchResult = await client.distube.search(args.join(" "));
//     const embeds = new MessageEmbed()
//       .setColor("BLUE")
//       .setDescription("Select the tracks you want to play!");

   
        
//         let select = new MessageActionRow()
//         .addComponents(
//             new MessageSelectMenu()
//       .setCustomId("search_select")
//       .setMaxValues(1)
//       .setMinValues(1)
//       .setPlaceholder("Select a Song")
//       .addOptions([
//           {
//           label: searchResult.name.length > 10 ? searchResult.name.slice(0, 22) + "..." : searchResult.name,
//           description: `${searchResult.uploader.name} • ${searchResult.formattedDuration}`,
//           values: searchResult.url,
//           }
//       ])
//     )
//     message.channel.send({embeds:[embeds], components:[select]})
    


//     client.on("clickMenu", async (menu) => {
//       try {
//         await menu.reply.defer();
//         await client.distube.play(message, menu.values[0]);
//         await menu.message.delete();
//       } catch (err) {
//         if (err) return;
//       }
//     });
//   }
// };
