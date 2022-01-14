const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const config = require("../../config.json")
module.exports = {
    name: "region",
    description: "Manage channel region",
    aliases: ["reg"],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {


        const regions = []
        regions[1] = "brazil"
        regions[2] = "europe"
        regions[3] = "hongkong"
        regions[4] = "india"
        regions[5] = "japan"
        regions[6] = "russia"
        regions[7] = "singapore"
        regions[8] = "southafrica"
        regions[9] = "sydney"
        regions[10] = "us-central"
        regions[11] = "us-east"
        regions[12] = "us-west"
        regions[13] = "us-south"

        let channel = message.member.voice.channel;
        if (!channel)
            return message.reply("`🔒` Setting channel on your own channel")

        if (!message.member.permissionsIn(channel).has('MANAGE_CHANNELS'))
            return message.reply('`🔒` Channel is owned');

        if (!message.guild.me.permissionsIn(channel).has('MANAGE_CHANNELS'))
            return message.reply('`🔒` I dont have authority to manage');

        let RTCRegion = new MessageEmbed()
            .setAuthor("Region State", "")
            .addField('Choose the region number', `\`\`\`sql
1  :: Brazil
2  :: Europe
3  :: Hongkong
4  :: India
5  :: Japan
6  :: Russia
7  :: Singapore
8  :: South Africa
9  :: Sydney
10 :: US Central
11 :: US East
12 :: US West
13 :: US South
\`\`\`
  `)
  .setColor(config.color)
            .addField("Follow this step :", `\`\`\`sql
${config.prefix}region 3
${config.prefix}region 6
\`\`\``)
            .setDescription("`brazil` `europe` `hongkong` `india` `japan` `russia` `singapore` `southafrica` `sydeny` `us-central` `us-east` `us-west` `us-south`")
            .setFooter(`© ${message.guild.name} 2021`)
        if (!args[0])
            return message.reply({
                embeds: [RTCRegion]
            })
        
        if (args[0] < 1) return message.reply("`🔒` Please input the valid list number, 1 -13 are available")    
        if (args[0] > 13) return message.reply("`🔒` Please input the valid list number, 1 - 13 are available")    

        if (!args.length || isNaN(args[0]))
            return message.reply("`❌` Please input the region list number")

        if (message.member.voice.channel) {
            if (args[0] <= 1 && args[0] >= 13) return message.reply("`❌` Please input the region list number")
            if (args[0] === "1") {
                const ngentot = new MessageEmbed()
                    .setTitle("Channel Edited")
                    .setDescription(`Channel Region edited by **${message.author.username}** into **${regions[1]}**`)
                    .setFooter(`© ${message.guild.name} 2021`)
                    .setColor("GREEN")
                message.reply({
                    embeds: [ngentot]
                })

                for (const [memberID, member] of channel.members) {
                    message.member.voice.channel.setRTCRegion(regions[1]);
                }
            }

            if (args[0] === "2") {
                const ngentot = new MessageEmbed()
                    .setTitle("Channel Edited")
                    .setDescription(`Channel Region edited by **${message.author.username}** into **${regions[2]}**`)
                    .setFooter(`© ${message.guild.name} 2021`)
                    .setColor("GREEN")
                message.reply({
                    embeds: [ngentot]
                })

                for (const [memberID, member] of channel.members) {
                    message.member.voice.channel.setRTCRegion(regions[2]);
                }
            }

            if (args[0] === "3") {
                const ngentot = new MessageEmbed()
                    .setTitle("Channel Edited")
                    .setDescription(`Channel Region edited by **${message.author.username}** into **${regions[3]}**`)
                    .setFooter(`© ${message.guild.name} 2021`)
                    .setColor("GREEN")
                message.reply({
                    embeds: [ngentot]
                })

                for (const [memberID, member] of channel.members) {
                    message.member.voice.channel.setRTCRegion(regions[3]);
                }
            }

            if (args[0] === "4") {
                const ngentot = new MessageEmbed()
                    .setTitle("Channel Edited")
                    .setDescription(`Channel Region edited by **${message.author.username}** into **${regions[4]}**`)
                    .setFooter(`© ${message.guild.name} 2021`)
                    .setColor("GREEN")
                message.reply({
                    embeds: [ngentot]
                })

                for (const [memberID, member] of channel.members) {
                    message.member.voice.channel.setRTCRegion(regions[4]);
                }
            }

            if (args[0] === "5") {
                const ngentot = new MessageEmbed()
                    .setTitle("Channel Edited")
                    .setDescription(`Channel Region edited by **${message.author.username}** into **${regions[5]}**`)
                    .setFooter(`© ${message.guild.name} 2021`)
                    .setColor("GREEN")
                message.reply({
                    embeds: [ngentot]
                })

                for (const [memberID, member] of channel.members) {
                    message.member.voice.channel.setRTCRegion(regions[5]);
                }
            }

            if (args[0] === "6") {
                const ngentot = new MessageEmbed()
                    .setTitle("Channel Edited")
                    .setDescription(`Channel Region edited by **${message.author.username}** into **${regions[6]}**`)
                    .setFooter(`© ${message.guild.name} 2021`)
                    .setColor("GREEN")
                message.reply({
                    embeds: [ngentot]
                })

                for (const [memberID, member] of channel.members) {
                    message.member.voice.channel.setRTCRegion(regions[6]);
                }
            }

            if (args[0] === "7") {
                const ngentot = new MessageEmbed()
                    .setTitle("Channel Edited")
                    .setDescription(`Channel Region edited by **${message.author.username}** into **${regions[7]}**`)
                    .setFooter(`© ${message.guild.name} 2021`)
                    .setColor("GREEN")
                message.reply({
                    embeds: [ngentot]
                })

                for (const [memberID, member] of channel.members) {
                    message.member.voice.channel.setRTCRegion(regions[7]);
                }
            }

            if (args[0] === "8") {
                const ngentot = new MessageEmbed()
                    .setTitle("Channel Edited")
                    .setDescription(`Channel Region edited by **${message.author.username}** into **${regions[8]}**`)
                    .setFooter(`© ${message.guild.name} 2021`)
                    .setColor("GREEN")
                message.reply({
                    embeds: [ngentot]
                })

                for (const [memberID, member] of channel.members) {
                    message.member.voice.channel.setRTCRegion(regions[8]);
                }
            }

            if (args[0] === "9") {
                const ngentot = new MessageEmbed()
                    .setTitle("Channel Edited")
                    .setDescription(`Channel Region edited by **${message.author.username}** into **${regions[9]}**`)
                    .setFooter(`© ${message.guild.name} 2021`)
                    .setColor("GREEN")
                message.reply({
                    embeds: [ngentot]
                })

                for (const [memberID, member] of channel.members) {
                    message.member.voice.channel.setRTCRegion(regions[9]);
                }
            }

            if (args[0] === "10") {
                const ngentot = new MessageEmbed()
                    .setTitle("Channel Edited")
                    .setDescription(`Channel Region edited by **${message.author.username}** into **${regions[10]}**`)
                    .setFooter(`© ${message.guild.name} 2021`)
                    .setColor("GREEN")
                message.reply({
                    embeds: [ngentot]
                })

                for (const [memberID, member] of channel.members) {
                    message.member.voice.channel.setRTCRegion(regions[10]);
                }
            }

            if (args[0] === "11") {
                const ngentot = new MessageEmbed()
                    .setTitle("Channel Edited")
                    .setDescription(`Channel Region edited by **${message.author.username}** into **${regions[11]}**`)
                    .setFooter(`© ${message.guild.name} 2021`)
                    .setColor("GREEN")
                message.reply({
                    embeds: [ngentot]
                })

                for (const [memberID, member] of channel.members) {
                    message.member.voice.channel.setRTCRegion(regions[11]);
                }
            }

            if (args[0] === "12") {
                const ngentot = new MessageEmbed()
                    .setTitle("Channel Edited")
                    .setDescription(`Channel Region edited by **${message.author.username}** into **${regions[12]}**`)
                    .setFooter(`© ${message.guild.name} 2021`)
                    .setColor("GREEN")
                message.reply({
                    embeds: [ngentot]
                })

                for (const [memberID, member] of channel.members) {
                    message.member.voice.channel.setRTCRegion(regions[12]);
                }
            }

            if (args[0] === "13") {
                const ngentot = new MessageEmbed()
                    .setTitle("Channel Edited")
                    .setDescription(`Channel Region edited by **${message.author.username}** into **${regions[13]}**`)
                    .setFooter(`© ${message.guild.name} 2021`)
                    .setColor("GREEN")
                message.reply({
                    embeds: [ngentot]
                })

                for (const [memberID, member] of channel.members) {
                    message.member.voice.channel.setRTCRegion(regions[13]);
                }
            }

        }
    }
}