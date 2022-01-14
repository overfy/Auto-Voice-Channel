const client = require("../index.js");

client.on("guildMemberUpdate", (oldMember, newMember) => {
    const oldstatus = oldMember.premiumSince;
    const newStatus = newMember.premiumSince;

    if(!oldstatus && newStatus) {
        client.channels.cache.get('COPY ID CHANNEL').send(`<@!${newMember.user.id}> has boosted the server!`);

        newMember.send('thanks for boosting the server')
    }

    if(oldstatus && !newStatus) {
        client.channels.cache.get('COPY ID CHANNEL').send(`<@!${newMember.user.id}> has unboosted the server!`);
    }
})