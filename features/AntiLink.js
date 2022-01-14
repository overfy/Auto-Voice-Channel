const client = require("../index")

client.on("message", async (message) => {
    var link = ["https://discord.gg/", "discord.gg/"]
    if (!message.member.permissions.has("MANAGE_MESSAGES")) {
       try {
        if (link.some(word => message.toString().toLowerCase().includes(word))) {

            message.delete()
                .catch(e => console.error("Couldn't delete message."));

            message.channel.send({
                content: "`❌` Dumb server link detected."
            }).then(msg => {
                setTimeout(() => msg.delete(), 5000)

            })
        }
      } catch(err) {
         console.log(err)
      }
    }
})

console.log("|🟦 ANTI LINK")