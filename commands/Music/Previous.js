//const { premium } = require("../../config.json")

// module.exports = {
//     name: "prev",
//     aliases: ["pprev", "previous"],
//     inVoiceChannel: true,
//     run: async (client, message) => {
    // if(!premium.includes(message.author.id)) return message.reply("This command currently premium");
//       const { channel, guild } = message;
//       const joining = message.member.voice.channel;
//       if (!joining) return message.reply("`❌` You must be in a voice channel")
  
//       const prevSong = await client.distube.previous(guild.id);
  
//       if (!prevSong) {
//         message.react("<:False:823030995053576232>")
//         //channel.send("`❌` There's no previous song before this song!");
//         return;
//       }
  
//       //channel.send("`✅` Playing Previous Song!");
//       message.react("<:True:826475694661042206>")
//     }
//   };
  