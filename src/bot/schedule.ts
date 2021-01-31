import { Client, Channel } from 'discord.js'
// import { parse } from 'node-html-parser'
import { format } from '@/common/DateUtil'
import { getFearAndGreed } from '@/support/RapidApi'

function getClientChannelByName(
  client: Client,
  channelName: string
): Channel | undefined {
  const textChannel = client.channels.cache
    .filter((channel) => channel.isText())
    .find(
      (channel: Channel & { name?: string }) => channel.name === channelName
    )
  return textChannel
}

export function callDate(client: Client) {
  const textChannel = getClientChannelByName(client, '일반')
  if (!textChannel?.isText()) {
    return
  }
  textChannel?.send(format(new Date(), 'YYYY년 MM월 DD일'))
}

export function callGreedAndFear(client: Client) {
  const textChannel = getClientChannelByName(client, 'fear-and-green')
  if (!textChannel?.isText()) {
    return
  }

  getFearAndGreed().subscribe((data) => {
    textChannel?.send(`
      현재 공포 지수: ${data.fgi.now.value}
      어제 공포 지수: ${data.fgi.previousClose.value}
    `)
  })
}
