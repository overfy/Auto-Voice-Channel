const { premium } = require("../../config.json")

module.exports = {
    name: "leave",
    aliases: ["dc", "bye"],
    inVoiceChannel: true,
    run: async (client, message) => {
      if(!premium.includes(message.author.id)) return message.reply("This command currently premium");
      const { channel, guild } = message;
      const joining = message.member.voice.channel;
      if (!joining) return message.reply("`❌` You must be in a voice channel")
  
      const voice = client.distube.voices.get(guild.id);
      const queue = client.distube.getQueue(guild.id);
  
      if (!voice) {
        channel.send("I'm not in the voice channel");
        return;
      }
  
      voice.leave();
      if (!queue) {
        channel.send("Byee-byee. . . .");
        return;
      } else {
        queue.delete();
        channel.send("Byee-byee. . . .");
        return;
      }
    }
  };
  