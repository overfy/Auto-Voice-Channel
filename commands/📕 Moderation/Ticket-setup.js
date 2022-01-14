const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "ticketsetup",
  aliases: ["ts"],

  run : async (client, message, args) => {
    let ikan = new MessageEmbed()
    .setAuthor("Feelings.")
    .setDescription("Untuk membuat ticket laporan, silahkan klik emoji ticket dibawah ini, kemudian kalian akan dibuatkan channel khusus untuk pengaduan ticket kalian.")
    const doing = await message.channel.send({embeds:[ikan]})
    doing.react("🎟")
  }
}