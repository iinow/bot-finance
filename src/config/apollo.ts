import { ApolloServer } from 'apollo-server'
import { buildSchemaSync } from 'type-graphql'
import Resolvers from '@/resolver'

const server = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: ([...Resolvers] as unknown) as [Function, ...Function[]],
  }),
})

export default server
