const Discord = require("discord.js");
const moment = require("moment");
const VERSION = "V1.1"
const CREATOR = "Alfian Verter"

exports.run = async (bot, message, args) => {

          var uptime = moment.duration(bot.uptime).format(" D [Days], H [Hours], m [Minutes], s [Seconds]");
          var cpu = process.cpuUsage().system / 1024 / 1024
          var embed = new Discord.RichEmbed()
              .addField(`📑 Guilds / Servers :`, `${bot.guilds.size} Guilds / Servers`)
              .addField(`⛄️ Users :`, `${bot.users.size} Users`)
              .addField(`🕘 Uptime :`, `${uptime}`)
              .addField(`📺 Version :`, `${VERSION}`)
              .addField('📟 Cpu usage :', `${Math.round(cpu * 100) / 100}%`)
              .addField(`💾 Ram usage :`, `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`)
              .addField(`🔰 Creator : `, `${CREATOR}`)
        .setColor("#9A2EFE")
              .setFooter('©Beta | By: Alfian Verter | 2018')
          message.channel.send(embed)
}

exports.help = {
  name: "say"
}
