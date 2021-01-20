// importar configCreator
// ../ smp volta um nivel
const configCreator = require('../utils/configCreator')
// exportar a configuraçao para testar
module.exports.config = configCreator({
  capabilities: {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['--headless']
    }
  }
})
