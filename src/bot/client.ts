import { Client } from 'discord.js'
import { callDate, callGreedAndFear } from '@/bot/schedule'
import { findConfig } from '@/repository/ConfigRepository'
import { ConfigType } from '@/common/Constants'
import { ConfigDiscord } from '@/schema/entity/ConfigDiscord'

const client = new Client()

client.on('ready', () => {
  console.log(`Logged in as ${client?.user?.tag}!`)
})

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.channel.send('pong')
  }
})

// client.setImmediate(callGreedAndFear, client)
client.setInterval(callGreedAndFear, 60 * 60 * 1000, client)
// client.setInterval(
//   (date: string) => {
//     console.log(date)
//   },
//   2000,
//   new Date().toString()
// )

findConfig(ConfigType.Discord).subscribe((config: ConfigDiscord) => {
  client.login(process.env.discord?.token || config.token)
})
// 3668032
