const Discord = require("discord.js");

module.exports = {
    name: "voice",
    description: "Searching for user vc",
    aliases: ["vc","vcroom"],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, message, args) => {

let user = message.mentions.members.first()

if (!user) return message.reply("`❌` Please mention user to get the voice invite")

// if(user === !message.member.voice.channel) return message.inlineReply("This user is not in any voice channel right now")

if(user.voice.channel === null || user.voice.channel === undefined) return message.reply(`\`❌\` That person is not on any voice Channel`);
let invite = await user.voice.channel.createInvite()


message.reply(invite ? `\`✅\` Here's the voice invite of that user ${invite}` : 'There has been an error during the creation of the invite.')
} 
}