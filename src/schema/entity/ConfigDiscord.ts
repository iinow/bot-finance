import { ConfigType } from '@/common/Constants'
import { BaseConfig } from '@/schema/entity/BaseConfig'

export class ConfigDiscord extends BaseConfig {
  public readonly token!: string

  constructor(token: string) {
    super(ConfigType.Discord)
    this.token = token
  }
}
