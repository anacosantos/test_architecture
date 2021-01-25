const ExpectedConditions = require('protractor')
const helper = require ('protractor-helper')
const Home = require('../page-objects/home')
const Destinations = require('../page-objects/components/destination')


describe('Given I\'m at the home page', () =>{
    
//criar uma instancia de destination para conseguir acessar o atributo destinationcardelement
  let destinationPage = new Destinations()
  beforeAll(() => {

    //Abrir a pagina principal
    //new Home().visit()

    //alterar a url da principal para a da destination
    browser.get('https://lit-chamber-61567.herokuapp.com/destinations/3')
  })

  describe('And there are images', ()=>{
    it('Then it render the imagecards', ()=>{
      helper.waitForElementVisibility(destinationPage.destinationcardelement)
      
      expect(destinationPage.destinationcardelement.getText()).toBe('f9091cd6-b3d3-4d7b-b8e7-8b1927a5ea27')
    })
  })
})