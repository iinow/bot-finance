import { ConfigType, COLLECTION_CONFIG } from '@/common/Constants'
import { map } from 'rxjs/operators'
import mongo from '@/config/mongo'
import { flatMap } from 'rxjs/internal/operators'

export function findConfig(configType: ConfigType) {
  return mongo().pipe(
    flatMap((db) => db.collection(COLLECTION_CONFIG).findOne({ configType }))
  )
}
