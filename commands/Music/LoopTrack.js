const { premium } = require("../../config.json")

module.exports = {
    name: "Loop",
    aliases: ["loop"],
    description: "Looping sound media",
      run: async (client, message, args) => {
        if(!premium.includes(message.author.id)) return message.reply("This command currently premium");
          try {
              if (!message.member.voice.channel) return message.reply("You have to enter the voice channel first.")
              const queue = client.distube.getQueue(message)
              if (!queue) return message.reply("There are no songs in the queue.")
              if (!queue && !client.distube.isPlaying(message)) return message.reply("Are you listening?!")
              let mode = null
              switch (args[0]) {
                  case "off":
                      mode = 0
                      break
                  case "turn it off":
                      mode = 0
                      break
                  case "only one song":
                      mode = 1
                      break
                  case "one":
                      mode = 1
                      break
                  case "all":
                      mode = 2
                      break
                  case "all":
                      mode = 2
                      break
              }
              mode = client.distube.setRepeatMode(message, mode)
              mode = mode ? mode === 2 ? "I decided to do `repeat all`": "I decided to do only one song": "Go to `Off`"
              message.reply(`${mode} I'll do it!`)
          } catch (e) {
              message.react("<:False:823030995053576232>")
          }
      }
  }