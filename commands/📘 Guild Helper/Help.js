const { Message, Client, MessageEmbed } = require("discord.js");
const config = require('../../config.json')

module.exports = {
    name: "help",
    description: "Bot commands library",
    aliases: ["h","?"],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        let embed = new MessageEmbed()
        .setAuthor(`${client.user.username} Commands`, "")
        .setDescription(`**Available Prefix** : \`${config.prefix}\``)
        .addField("Check it out my available commands category",'`📂` Commands\n``` ﹄ help voice\n ﹄ Help moderation\n ﹄ Help general\n ﹄ Help bot```')
.setImage('https://cdn.discordapp.com/attachments/872469123672731778/930531115113013249/standard.png')
//┗ Help music
        .setColor()
        .setFooter(`Powered by ${message.guild.name}`)

        if (!args[0]) {
            return message.channel.send({embeds:[embed]})
        }
        if (args[0] === "voice") {
            let voice = new MessageEmbed()
            .setAuthor("Voice Stage","")
            .addField("🔧 Channel Manage",`\`\`\`yml
Bitrate   :: ✔️
Limit     :: ✔️
Name      :: ✔️
Region    :: ✔️\`\`\``)
            .addField("🔐 Private State",`\`\`\`yml
Lock      :: ✔️
Unlock    :: ✔️
Invis     :: ✔️
Public    :: ✔️\`\`\``)
            .addField("🛡 Member List",`\`\`\`yml
Blacklist :: ✔️
Whitelist :: ✔️
Access    :: ✔️
Unaccess  :: ✔️\`\`\``)
            .addField("🧾 Other Commands",`\`\`\`yml
Voice     :: ✔️
Channel   :: ✔️
Transfer  :: ✔️\`\`\``)
            
            .setFooter(`Powered by ${message.guild.name}`)

            message.reply({embeds:[voice], ephemeral: true})
        }
        if (args[0] === "moderation") {
            let Moderation = new MessageEmbed()
            .setAuthor("MODERATION","")
            .setDescription(`
**Purge :** Untuk menghapus pesan yang ada
**Embed :** Menampilkan text didalam border`)
            .setColor()
            .setFooter(`Powered by ${message.guild.name}`)
            message.reply({embeds: [Moderation]})
        }
        if (args[0] === "general") {
            let General = new MessageEmbed()
            .setAuthor("MODERATION (UPDATE)","")
            .setDescription("`Ping` `Translate` `Server`")
            .setColor()
            .setFooter(`Powered by ${message.guild.name}`)
            message.reply({embeds: [General]})
        }
        // if (args[0] === "music") {
        //     let music= new MessageEmbed()
        //     .setColor(config.voice)
        //     .setAuthor("MUSIC TRACKS (MAINTENANCE)","")
        //     .addField("`✅`Available Commands","`Autoplay` `Join` `Leave` `Loop` `Nowplaying` `Pause` `Play` `Prev` `Resume` `Seek` `Skip` `Stop` `Queue`")
        //     .setFooter(`Powered by ${message.guild.name}`)
        //     message.reply({embeds:[music]})
        // }

        if (args[0] === "bot") {
            let Bots = new MessageEmbed()
            .setAuthor("BOT STATISTIC","https://cdn.discordapp.com/attachments/872435389879685120/875546489617797171/unknown.png")
            .setColor(config.bots)
            .setDescription(`
**System :** Mengetahui penjelasan tentang bot`)
            message.reply({embeds:[Bots]})
        }


    }
};
