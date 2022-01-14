const client = require("../index")
const Discord = require("discord.js")
const channelRoute = require("../channel.json")

client.on('messageReactionAdd', async (reaction, user) => {

    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    const public = user.guild;
    const ikan = user.id;
    const name = `ticket-${ikan}`
    let embed = new Discord.MessageEmbed()
        .setAuthor("GUILD TICKET OPTION")
        .setColor("GREEN")
        .addField("How it works then?", "You can type a report, then our staff will be quickly Response on your report or feedback. Thanks for using our facilities. Please dont abuse!")
        .addField("Add a proof please", "You can add any content which that was a report proof. If there is no proof, we'll accept and we think you just give an advice to our server")
        .addField("Close it then!", "> 🗑 Click on this emoji to close the ticket")
    if (reaction.message.id === '923695549226549259') {
        if (reaction.emoji.name === '🎟') {
            reaction.users.remove(user)
            if (reaction.message.guild.channels.cache.find(ch => ch.name === name)) {
                reaction.message.channel.send({content:"**❌ | YOU CAN ONLY HAVE ONE TICKET AT THE TIME**"}).then(deletit => {
                    setTimeout(() => deletit.delete(), 5000)
                })
            } else {
               reaction.message.channel.send({content:`**💌 | SUCCESSFULLY CREATING A TICKET FOR ${user.username}**`}).then(damn => {
                    setTimeout(() => damn.delete(), 5000)
                })
                try {
                    reaction.message.guild.channels.create(name, {
                        type: "GUILD_TEXT",
                        parent: channelRoute.TICKET_PARENT
                    }).then(async (chan) => {
                       await chan.send({content:`<@${user.id}> **| YOU CAN REPORT A THING OR GIVE US A FEEDBACK**`})
                        const dolanan = await chan.send({
                            embeds: [embed]
                        }).then(dog => dog.pin())
                        dolanan.react("🗑")
                     
                        await chan.lockPermissions()
                        await chan.permissionOverwrites.edit(user.id, {
                            SEND_MESSAGES: true,
                            SEND_TTS_MESSAGES: true,
                            EMBED_LINKS: true,
                            ATTACH_FILES: true,
                            VIEW_CHANNEL: true
                        })
                    })
                } catch(err) {
                    console.log(err)
                }
            }
        }
    }
})
client.on('messageReactionAdd', async (reaction, user) => {

    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    const member = user.id;
    const name = `ticket-${member}`

    if (reaction.emoji.name === '🗑') {
        reaction.users.remove(user)
        if (reaction.message.channel.name === name) {
            await reaction.message.channel.delete()
        } else {
            await reaction.message.channel.send({content:"**👑 | You are not ticket author!**"})
        }
    }

})