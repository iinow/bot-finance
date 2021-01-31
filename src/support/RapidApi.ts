import { map, filter } from 'rxjs/operators'
import axios from 'axios'
import { findConfig } from '@/repository/ConfigRepository'
import { ConfigType } from '@/common/Constants'
import { flatMap } from 'rxjs/internal/operators'
import { ConfigRapidApi } from '@/schema/entity/ConfigRapidApi'

type FearAndGreedData = {
  value: number
  valueText: string
}

type FearAndGreed = {
  fgi: {
    now: FearAndGreedData
    previousClose: FearAndGreedData
    oneWeekAgo: FearAndGreedData
    oneMonthAgo: FearAndGreedData
    oneYearAgo: FearAndGreedData
  }
}

export function getFearAndGreed() {
  return findConfig(ConfigType.RapidApi).pipe(
    flatMap((config: ConfigRapidApi) =>
      axios.get('https://fear-and-greed-index.p.rapidapi.com/v1/fgi', {
        headers: {
          'x-rapidapi-key': config.key,
          'x-rapidapi-host': config.host,
          useQueryString: true,
        },
      })
    ),
    filter((res) => res.status === 200),
    map((res) => res.data as FearAndGreed)
  )
}
