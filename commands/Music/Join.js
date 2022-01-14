const { premium } = require("../../config.json")

module.exports = {
    name: "join",
    aliases: ["summon", "joni"],
    inVoiceChannel: true,
    run: async (client, message) => {
      if(!premium.includes(message.author.id)) return message.reply("This command currently premium");
      const { member, channel } = message;
      const joining = message.member.voice.channel;
      if (!joining) return message.reply("`❌` You must be in a voice channel")
  
      try {
        await client.distube.voices.join(member.voice.channel);
      } catch (err) {
        channel.send(
          "> An error occured while bot is trying to joining to the voice channel."
        );
        return;
      }
    }
  };
  