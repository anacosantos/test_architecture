// expotando uma função (abaixo) recebendo uma configuraçao com uma funçao
// definindo uma default e recebendo um objeto que é a URL que será testada
// spec onde o arquivo de teste mora e que recebe array.
// extensao *.spec.js é o nosso arquivo de teste
// qd temos protector que nao usa angular usaremos onPrepare com função
// para dizer que não é aplic angular
// o jasmineNodeOpts true: são testes independentes
module.exports = provideConfig => {
  const defaultConfig = {
    baseURL: 'https://lit-chamber-61567.herokuapp.com',
    specs: ['../specs/*.spec.js'],
    onPrepare: () => {
      browser.waitforAngularEnalble(false)
    },
    jasmineNodeOpts: { random: true }
  }
  // qd for executada a função vai receber e colocar dentro do objeto vazio:
  // os returns
  return Object.assign(
    {},
    defaultConfig,
    provideConfig
  )
}
