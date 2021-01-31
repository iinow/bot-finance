import { Client } from 'discord.js'

export function callDate(client: Client) {
  const textChannel = client.channels.cache
    .filter((channel) => channel.isText())
    .find(channel => channel.name === 'fear-and-green')
    
    textChannel?.send(new Date().toString()
}
