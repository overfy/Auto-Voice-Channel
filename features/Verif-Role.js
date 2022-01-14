const client = require("../index")

client.on('voiceStateUpdate', async (oldState, newState) => {
    if (!newState.channel || !newState.member) return; 
    if(newState.channel.id === "881134467673124934") { 
        const role = newState.guild.roles.cache.get("854406921082634250");
        if (!newState.member.roles.cache.has(role)) newState.member.roles.add(role);
      
    }
});