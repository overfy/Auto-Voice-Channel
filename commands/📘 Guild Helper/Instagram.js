const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const Insta = require('scraper-instagram');
const InstaClient = new Insta();
const config = require("../../config.json")

module.exports = {
    name: "instagram",
    description: "user instagram",
    aliases: ["insta","ig"],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

   let username = args[0]
   if (!username) return message.reply("Please input instagram username ")

 function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "Q" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /.0+$|(.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

InstaClient.authBySessionId(config.SessionID)
.then((Insta) => {
InstaClient.getProfile(username)
       .then(async prop => {
let fullname = prop.name
let followers = prop.followers
let followings = prop.following
let picture = prop.pic
let biograph = prop.bio
let post = prop.posts
let mutual = prop.mutualFollowers
let privasi = prop.private
let verif = prop.verified
let bisnis = prop.business
let idn = prop.id
let linked = prop.link

let Instagram = new MessageEmbed()
.setAuthor(`${fullname} | ${username}`, 'https://cdn.discordapp.com/attachments/872435389879685120/875537801582616616/unknown.png')
.setDescription(`Result yang anda cari mengenai pengguna instagram telah tersedia, silahkan klik link untuk mengunjugi halaman tersebut`)

//.addField("<:Instagram:870853958070075482> User Biograph",biograph)

.addField("User Count :",`

└| **Follower :** ${nFormatter(followers, 1).toLocaleString()} User
└| **Following :** ${nFormatter(followings, 1).toLocaleString()} User
└| **Posts :** ${nFormatter(post, 1).toLocaleString()} Media
`)

.addField("Information About :",`
└| \`🆔\` **ID :** ${idn}
└| ${bisnis ? '`✅`' : '`❌`'} **Business Account**
└| ${privasi ? '`🔒`' : '`🔓`'} **Private Account**
└| ${verif ? '`✅`' : '`❌`'} **Verified Account**

Link : ${linked}
`)
//[**${username}**](https://www.instagram.com/${username}/)
.setThumbnail(picture)
.setColor(config.instagram)
.setTimestamp()
.setFooter(`© ${message.guild.name} 2021`)

return message.channel.send({embeds:[Instagram]})

    })
   })
  }
}