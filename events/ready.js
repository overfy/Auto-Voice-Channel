const client = require("../index");

client.on("ready", (message => {
   client.user.setStatus("ONLINE");
   console.log(`${client.user.tag} Summoned`);
   console.log(`Feelings.${client.guilds.cache.size} Server !!`);
  //command status bot
  setInterval(() => {
  
    const status = ['Pevita Pearce.', `Prefix room.`]
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity({
      url: "https://www.youtube.com/watch?v=S2IYCZnhHcg",
      name: status[random],
      type: "STREAMING",
    });
  }, 3000)
}));