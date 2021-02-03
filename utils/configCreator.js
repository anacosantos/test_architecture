// npm init -y aceita config default
// fazer gitignore no comando: touch .gitignore. Dento de VS colocar: mac: DS_store e outros : node_modules/
// intalar: npm install protractor protractor-helper standard.js --save-dev
// mkdir configurations
// expotando uma função (abaixo) recebendo uma configuraçao com uma funçao
// definindo uma default e recebendo um objeto que é a URL que será testada
// spec onde o arquivo de teste mora e que recebe array.
// extensao *.spec.js é o nosso arquivo de teste
// protector que nao usa angular usaremos onPrepare com função para dizer que não é aplic angular
// o jasmineNodeOpts true: são testes independentes
// webdriver-manager start
// npm install faker --save-dev 
//const pagerSorter =  Math.floor(Math.random() * 4);//gera n° entre 0 e 3
//.floor para arrendodar o numero

module.exports = provideConfig => {
  const defaultConfig = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://lit-chamber-61567.herokuapp.com',
    specs: ['../specs/header.spec.js'],
    onPrepare: () => {
      browser.waitForAngularEnabled(false)
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
