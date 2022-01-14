const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "bitrate",
  description: "Manage channel bitrate",
  aliases: ["bit"],

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let channel = message.member.voice.channel;
    if (!channel)
      return message.reply(
        "<:Locked:878090820912295967> Setting channel on your own channel"
      );
    if (!message.guild.me.permissionsIn(channel).has("MANAGE_CHANNELS"))
      return message.reply(
        "<:Locked:878090820912295967> I dont have authority to manage"
      );

    if (!message.member.permissionsIn(channel).has("PRIORITY_SPEAKER"))
      return message.reply("<:Locked:878090820912295967> Channel is owned");

    if (!args.length || isNaN(args[0]))
      return message.reply(
        "<:False:823030995053576232> Please input the bitrate number"
      );

    const guildLevel = message.guild.premiumTier;
    let bitrate = args.join(" ") || isNaN(args[0]);
    if (!bitrate) return message.reply("Input bitrate");

    if (message.member.voice.channel) {
      if (guildLevel === "None")
        if (bitrate < 8)
          return message.reply(
            "<:False:823030995053576232> You cant set bitrate under 8Kbps, because the lower is 8Kbps"
          );
      if (bitrate > 96)
        return message.reply(
          "<:False:823030995053576232> You cant set bitrate higher than 96Kbps, because the server has lvl 0 boost"
        );
      let ika = new Discord.MessageEmbed();
      let channel = message.guild.channels.cache.get(
        message.member.voice.channel.id
      );
    }

    if (message.member.voice.channel) {
      if (guildLevel === 1)
        if (bitrate < 8)
          return message.reply(
            "<:False:823030995053576232> You cant set bitrate under 8Kbps, because the lower is 8Kbps"
          );
      if (bitrate > 128)
        return message.reply(
          "<:False:823030995053576232> You cant set bitrate higher than 128Kbps, because the server has lvl 1 boost"
        );
      let channel = message.guild.channels.cache.get(
        message.member.voice.channel.id
      );
    }

    if (message.member.voice.channel) {
      if (guildLevel === 2)
        if (bitrate < 8)
          return message.reply(
            "<:False:823030995053576232> You cant set bitrate under 8Kbps, because the lower is 8Kbps"
          );
      if (bitrate > 256)
        return message.reply(
          "<:False:823030995053576232> You cant set bitrate higher than 256Kbps, because the server has lvl 2 boost"
        );
      let channel = message.guild.channels.cache.get(
        message.member.voice.channel.id
      );
    }

    if (message.member.voice.channel) {
      if (guildLevel === 3)
        if (bitrate < 8)
          return message.reply(
            "<:False:823030995053576232> You cant set bitrate under 8Kbps, because the lower is 8Kbps"
          );
      if (bitrate > 384)
        return message.reply(
          "<:False:823030995053576232> You cant set bitrate higher than 384Kbps, because that was the mas bit"
        );
    }
    // let ika = new Discord.MessageEmbed()
    //     .setTitle("Channel Edited")
    //     .setDescription(`\`🔨\` Channel Bitrate edited by **${message.author.username}** into **${bitrate}**`)
    //     .setFooter(`© ${message.guild.name} 2021`)
    //     .setColor("GREEN")

    // message.reply({
    //     embeds: [ika]
    // })
    await message.react("<:True:826475694661042206>");
    await message.member.voice.channel.setBitrate(bitrate + "000");
  },
};

// const { MessageEmbed } = require("discord.js");
// const Discord = require("discord.js");

// module.exports = {
//   name: "Bitrate",
//   aliases: ["bitrate","rate"],
//   description: "Update channel bitrate",
// 	run : async (client , message, args) => {

//     let channel = message.member.voice.channel;
//     if (!channel)
//       return message.reply(
//         "<:Locked:878090820912295967> Setting channel on your own channel"
//       );
//     if (!message.member.permissionsIn(channel).has("PRIORITY_SPEAKER"))
//       return message.reply("<:Locked:878090820912295967> Channel is owned");

//     if (!message.guild.me.permissionsIn(channel).has("MANAGE_CHANNELS"))
//       return message.reply(
//         "<:Locked:878090820912295967> I dont have authority to manage"
//       );

//   if (message.member.voice.channel) {

//   let bitrate = args.join(" ") || isNaN(args[0]);
//   if (!bitrate) return message.reply("Input bitrate");
//   if(bitrate < 8) return message.reply("⚠ - You cant set bitrate under 8Kbps, because the lower is 8Kbps")
//   if(bitrate > 384) return message.reply("⚠ - You cant set bitrate higher 384Kbps, because the bitrate limit is 384Kbps")
//   let ika = new Discord.MessageEmbed()

//   .setTitle("Channel Edited")
//   .setDescription(`\`🔨\` Channel Bitrate edited by **${message.author.username}** into **${bitrate}**`)
//   .setFooter(`© ${message.guild.name} 2021`)
//   .setColor("GREEN")

//   message.reply({embeds:[ika]})
//   let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
//   for (const [memberID, member] of channel.members) {

//     message.member.voice.channel.setBitrate(bitrate+"000");
//   }
// }
// }
// }
