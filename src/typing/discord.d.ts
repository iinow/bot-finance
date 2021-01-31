declare module 'discord.js' {
  import { Channel as ch } from 'discord.js'

  interface TextChannel {
    name: string
  }

  export type Channel = ch & TextChannel
}
