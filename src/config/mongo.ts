import { MongoClient } from 'mongodb'
import { from, of } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { flatMap } from 'rxjs/internal/operators'

const url = `mongodb://${process.env.mongo.host}:${process.env.mongo.port}`
const client = new MongoClient(url, {
  useUnifiedTopology: true,
})

export default () =>
  of(client).pipe(
    flatMap((mongo) => {
      if (mongo.isConnected()) {
        return Promise.resolve(mongo)
      }
      return from(mongo.connect())
        .pipe(tap(() => console.log('Connected successfully to server')))
        .toPromise()
    }),
    map((mongo) => mongo.db(process.env.mongo.dbName))
  )
