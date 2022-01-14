const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "embed",
    description: "Embed a message",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("`❌` You don't have the necessary authority - `MANAGE_MESSAGES`")
if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply("`❌` Missing Permission on me - `MANAGE_MESSAGES`")
    let msg = args.join(" ")
    if(!msg) return message.reply("`❌` Please type a description text")
    let Embed = new MessageEmbed()
    .setDescription(msg);
    await message.channel.send({ embeds: [Embed] });
    
  }
};