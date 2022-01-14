const Discord = require('discord.js');

module.exports = {
    name: "purge",
    description: 'Clear amount message',
    aliases: ["prune","delete"],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
  

if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("`🔒` You don't have the necessary authority - `MANAGE_MESSAGES")
if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply("`🔒` Missing Permission on me - `MANAGE_MESSAGES`")
    if (isNaN(args[0])) return message.channel.send("Please input a valid number.") // isNaN = is Not a Number. (case sensitive, write it right)
    if (args[1] > 100) return message.channel.send("Insert the number less than 100.") // Discord limited purge number into 100.
    if (args[0] < 2) return message.channel.send("Insert the number more than 1.")
    
    await message.delete()
    await message.channel.bulkDelete(args[0])
    .then(messages => message.channel.send(`Deleting ${messages.size}/${args[0]} messages on this channel`)).then(msg => {
      setTimeout(() => msg.delete(), 5000)
    })
    .catch(() => message.channel.send("Something went wrong, while deleting messages.")) // This error will be displayed when the bot doesn't have an access to do it.
  }
}
