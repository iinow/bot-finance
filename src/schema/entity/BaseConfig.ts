import { ConfigType } from '@/common/Constants'

export abstract class BaseConfig {
  public configType: ConfigType

  constructor(configType: ConfigType) {
    this.configType = configType
  }
}
