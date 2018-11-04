const devConfig = {
  MONGODB_URI: 'mongodb://localhost:27017/nixie-portal'
}
const testConfig = {
  MONGODB_URI: 'mongodb://localhost:27017/nixie-portal-test'
}
const prodConfig = {
  MONGODB_URI: process.env.MONGODB_URI
}
const defaultConfig = {
  PORT: process.env.PORT || 3000
}

const test = 'test';

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