const { premium } = require("../../config.json")

module.exports = {
    name: "resume",
    inVoiceChannel: true,
    run: (client, message) => {
      if(!premium.includes(message.author.id)) return message.reply("This command currently premium");
      const { channel, author, guild } = message;
      const joining = message.member.voice.channel;
      if (!joining) return message.reply("`❌` You must be in a voice channel")
  
      const queue = client.distube.getQueue(guild.id);
      if (!queue) {
        channel.send("`❌` There's no available song inside the Queue.");
        return;
      }
  
      if (queue.playing) {
        channel.send("`❌` Only use this command to resume the paused song!");
        return;
      }
  
      client.distube.resume(guild.id);
      channel.send(`\`✅\`The song is **Resumed** by ${author}`);
    }
  };
  