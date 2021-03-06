import { smart } from 'webpack-merge'
import webpack from 'webpack'
import { Env, baseConfig } from './webpack.base.config'

const NodemonPlugin = require('nodemon-webpack-plugin')

const env: Env = {
  server: {
    profiles: 'local',
    port: 4001,
  },
  redis: {
    host: 'localhost',
    port: 6379,
  },
  typeOrm: {
    dbType: 'mysql',
    dropSchema: false,
  },
  mysql: {
    host: '192.168.0.24',
    port: 3306,
    username: 'root',
    password: 'qlalfqjsghekd',
    database: 'diary',
  },
  oauth: {
    provider: {
      kakao: {
        clientId: '2d757aa5c6d0840f1d941423b5fe0ff1',
        clientSecret: '5CWqDOhlz3wnJd17RR1rwYLMfGMamhUh',
        callbackUrl: 'http://localhost:7711/oauth/kakao/callback',
      },
      github: {
        clientId: '9aea5e967ca935d0faef',
        clientSecret: 'f2cba3fc114c0df20929b248ad1485e72ca66f02',
        callbackUrl: 'http://localhost:7711/oauth/github/callback',
      },
    },
    webRedirectUrl: 'http://localhost:3000',
  },
  jwtSecret: 'HAHAHA',
  influx: {
    host: '192.168.0.24',
    port: 8101,
    database: 'ha',
  },
  discord: {
    token: 'DISCORD_TOKEN_REQUIRED',
  },
  mongo: {
    host: '192.168.0.24',
    port: 27017,
    dbName: 'botF',
  },
}

const config = smart({
  mode: 'development',
  plugins: [new webpack.EnvironmentPlugin(env), new NodemonPlugin({})],
  devtool: 'source-map',
  watch: false,
})

module.exports = smart(baseConfig, config)
