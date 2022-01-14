const { premium } = require("../../config.json")

module.exports = {
    name: "pause",
    inVoiceChannel: true,
    run: (client, message) => {
      if(!premium.includes(message.author.id)) return message.reply("This command currently premium");
      const { channel, author, guild } = message;
      const joining = message.member.voice.channel;
      if (!joining) return message.reply("`❌` You must be in a voice channel")
  
      const queue = client.distube.getQueue(guild.id);
      if (!queue) {
        channel.send("There's no available song inside the Queue.");
        return;
      }
  
      if (queue.paused) {
        channel.send("The song is already Paused.");
        return;
      }
  
      client.distube.pause(guild.id);
      channel.send(`The song is **Paused** by ${author}`);
    }
  };
  