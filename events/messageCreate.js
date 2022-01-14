const client = require("../index");
const channelRoute = require("../channel.json");
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const config = require("../config.json");
const fs = require("fs");
const { DisTube } = require("distube");
// const distube = new DisTube(client, {
// 	searchSongs: 1,
// 	searchCooldown: 30,
// 	leaveOnEmpty: true,
// 	emptyCooldown: 0,
// 	leaveOnFinish: true,
// 	leaveOnStop: true,
// 	//plugins: [new SoundCloudPlugin(), new SpotifyPlugin()],
// })
client.distube = new DisTube(client, { leaveOnFinish: true });
client.on("messageCreate", async (message) => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.toLowerCase().startsWith(client.config.prefix)
  )
    return;

  const [cmd, ...args] = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(" ");

  const command =
    client.commands.get(cmd.toLowerCase()) ||
    client.commands.get(client.aliases.get(cmd.toLowerCase()));

  if (!command) return message.reply("Im sorry that command doesnt exist");
  await command.run(client, message, args);
});

const status = (queue) =>
  `Volume: \`${queue.volume}%\` | Filter: \`${
    queue.filter || "Off"
  }\` | Loop: \`${
    queue.repeatMode
      ? queue.repeatMode === 2
        ? "Full iteration"
        : "Only one song"
      : "Off"
  }\` | Auto play : \`${queue.autoplay ? "On" : "Off"}\``;

let msgId;

client.distube
  .on("finishSong", async (queue, song) => {
    await queue.textChannel.messages.delete(msgId);
  })
  .on("playSong", (queue, song) => {
    const embeds = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor("Playing")
      .setDescription(`[${song.name}](${song.url})`)
      .setImage(song.thumbnail)
      .setFooter(`Request by ${song.user.username}`);
    queue.textChannel
      .send({ embeds: [embeds] })
      .then((msg) => (msgId = msg.id))
      .catch((err) => console.log(err));
  })
  .on("addSong", (queue, song) => {
    if (queue.songs.length === 1) return;

    const embeds = new Discord.MessageEmbed()
      .setColor()
      .setDescription(`Adding [${song.name}](${song.url}) to queue`)
      .setFooter(`Receive by ${song.user.username}`);

    queue.textChannel.send({ embeds: [embeds] });
  });
// .on("finish", (queue) => {
//   queue.textChannel.send("Queue is empty now. Byeee. . . .");
// })
// .on("empty", (queue) => {
//   queue.textChannel.send("Why you left me alone ?! ");
// });

client.on("message", (message) => {
  if (message.content === "!gojoin") {
    client.emit("guildMemberAdd", message.member);
  }
  if (message.content === "!goleave") {
    client.emit("guildMemberRemove", message.member);
  }
});

client.on("message", async (message) => {
  if (
    message.content === `<@!${client.user.id}>` ||
    message.content === `<@${client.user.id}>`
  ) {
    return message.reply(`My prefix is ${config.prefix}`);
  }
});
