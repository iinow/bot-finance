import { Field, InputType, Int } from 'type-graphql'

@InputType()
export class FearGreen {
  @Field(() => Int, { nullable: true })
  id!: number

  @Field(() => String)
  content!: string

  @Field(() => Date)
  createdAt!: Date
}
