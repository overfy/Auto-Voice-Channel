const { Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    description: 'Returns websocket ping',
    aliases: ["pang","pung","peng","pong"],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.reply(`\`🏓\` ${client.ws.ping} ws ping`);
    }
};
