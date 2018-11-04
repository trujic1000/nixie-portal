const devConfig = {
  MONGODB_URI: 'mongodb://dev:admin1@ds151863.mlab.com:51863/portaldb' // yamanziadeh1 = account name
}
const testConfig = {
  MONGODB_URI: 'mongodb://dev:admin1@ds151753.mlab.com:51753/portaldb-test'
}
const prodConfig = {
  MONGODB_URI: process.env.MONGODB_URI
}
const defaultConfig = {
  PORT: process.env.PORT || 3000
}

function envConfig(env) {
  switch(env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default: 
      return prodConfig;
  }
}

module.exports = {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV || 'development')
}