const client = require("../index");
const { Collection } = require('discord.js')
const channelRoute = require("../channel.json")

client.on('voiceStateUpdate', async (oldState, newState) => {
    const user = await client.users.fetch(newState.id);
    const Party = await client.users.fetch(newState.id);

    if (newState.channel === newState.guild.channels.cache.get("930529141369999370")) {
        newState.guild.channels.create(`${user.username}`, {
                type: "GUILD_VOICE",
                parent: "930527414621179955",
                userLimit : "0"
            })
            .then(async (set) => {
                    set.lockPermissions().then(add => add.permissionOverwrites.edit(newState.id, {
                    //PERMISSION FOR CHANNEL AUTHOR
                    STREAM: true,
                    CONNECT: true,
                    USE_VAD: true,
                    MANAGE_CHANNELS: true,
                    SPEAK: true,
                }))
                await newState.setChannel(newState.guild.channels.cache.get(set.id))
            })
    }
    //FILTER THE CHANNEL IF THE SIZE HAS 0   
    if (oldState.channel) {
    let filtered = (ch) =>
      ch.parent === 
        newState.guild.channels.cache.get("930527414621179955") &&
      ch.id !== newState.guild.channels.cache.get(channelRoute.AUTO_VOICE) &&
      oldState.channel.id === ch.id &&
      oldState.channel.members.filter((m) => !m.user.bot).size < 1;

        return oldState.guild.channels.cache
            .filter(filtered)
            .forEach((ch) => ch.delete());
    }
//AUTO VOICE CHANNEL SECOND
    if (newState.channel === newState.guild.channels.cache.get("922183874904219659")) {
        newState.guild.channels.create(`${Party.username}`, {
                type: "GUILD_VOICE",
                parent: "922183952180064336",
                userLimit: "3"
            })
            .then(async (set) => {
                set.lockPermissions().then(add => add.permissionOverwrites.edit(newState.id, {
                    //PERMISSION FOR CHANNEL AUTHOR
                    STREAM: true,
                    CONNECT: true,
                    USE_VAD: true,
                    MANAGE_CHANNELS: true,
                    SPEAK: true,
                }))
                return newState.setChannel(newState.guild.channels.cache.get(set.id))
            })
      }
    //FILTER THE CHANNEL IF THE SIZE HAS 0   
    if (oldState.channel) {
    let filtered = (ch) =>
      ch.parent === 
        newState.guild.channels.cache.get("922183952180064336") &&
      ch.id !== newState.guild.channels.cache.get(channelRoute.AUTO_VOICE2) &&
      oldState.channel.id === ch.id &&
      oldState.channel.members.filter((m) => !m.user.bot).size < 1;

        return oldState.guild.channels.cache
            .filter(filtered)
            .forEach((ch) => ch.delete());
    }
});
console.log("|🟦 AUTO VOICE")