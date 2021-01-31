import { Client } from 'discord.js'
import { callDate } from '@/bot/schedule'

const client = new Client()

client.on('ready', () => {
  console.log(`Logged in as ${client?.user?.tag}!`)
})

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.channel.send('pong')
  }
})

client.setInterval(callDate, 3000, client)
// client.setInterval(
//   (date: string) => {
//     console.log(date)
//   },
//   2000,
//   new Date().toString()
// )

client.login(process.env.discord.token)
// 3668032
export default client
