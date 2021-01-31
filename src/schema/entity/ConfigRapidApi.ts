import { ConfigType } from '@/common/Constants'
import { BaseConfig } from '@/schema/entity/BaseConfig'

export class ConfigRapidApi extends BaseConfig {
  public readonly key!: string

  public readonly host!: string

  constructor(key: string, host: string) {
    super(ConfigType.RapidApi)
    this.key = key
    this.host = host
  }
}
