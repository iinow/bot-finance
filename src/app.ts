import 'reflect-metadata'
import server from '@/config/apollo'
import '@/bot/client'

server.listen({
  port: process.env.server.port,
  path: '/graphql',
})
