import { Client, Channel } from 'discord.js'

export function callDate(client: Client) {
  const textChannel = client.channels.cache
    .filter((channel) => channel.isText())
    .find(
      (channel: Channel & { name?: string }) =>
        channel.name === 'fear-and-green'
    )

  if (textChannel?.isText()) {
    textChannel?.send(new Date().toString())
  }
}
