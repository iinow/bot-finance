import { Resolver, Query, Mutation, Arg, Authorized, Int } from 'type-graphql'

@Resolver()
export class GreedAndFearResolver {
  @Query(() => String, { nullable: true })
  diaries(): Promise<any> {
    return Promise.resolve('dkdkd')
  }
}
