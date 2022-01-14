const client = require("../index");
const { Collection } = require('discord.js')
const channelRoute = require("../channel.json")

client.on('voiceStateUpdate', async (oldState, newState) => {
    const user = await client.users.fetch(newState.id);
    const Party = await client.users.fetch(newState.id);

    if (newState.channel === newState.guild.channels.cache.get(channelRoute.AUTO_VOICE)) {
        newState.guild.channels.create(`${user.username}`, {
                type: "GUILD_VOICE",
                parent: channelRoute.AUTO_CATEGORY
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
        newState.guild.channels.cache.get(channelRoute.AUTO_CATEGORY) &&
      ch.id !== newState.guild.channels.cache.get(channelRoute.AUTO_VOICE) &&
      oldState.channel.id === ch.id &&
      oldState.channel.members.filter((m) => !m.user.bot).size < 1;

        return oldState.guild.channels.cache
            .filter(filtered)
            .forEach((ch) => ch.delete());
    }

});
console.log("|🟦 AUTO VOICE")

client.on('voiceStateUpdate', async (oldState, newState) => {
    const user = await client.users.fetch(newState.id);
    const Party = await client.users.fetch(newState.id);

    if (newState.channel === newState.guild.channels.cache.get(channelRoute.AUTO_VOICE2)) {
        newState.guild.channels.create(`${user.username}`, {
                type: "GUILD_VOICE",
                parent: channelRoute.AUTO_CATEGORY2
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
        newState.guild.channels.cache.get(channelRoute.AUTO_CATEGORY2) &&
      ch.id !== newState.guild.channels.cache.get(channelRoute.AUTO_VOICE2) &&
      oldState.channel.id === ch.id &&
      oldState.channel.members.filter((m) => !m.user.bot).size < 1;

        return oldState.guild.channels.cache
            .filter(filtered)
            .forEach((ch) => ch.delete());
    }

});