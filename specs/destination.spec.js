const helper = require('protractor-helper')
const Destinations = require('../page-objects/components/destination')

describe('Given I\'m at the home page', () => {
// criar uma instancia de destination para conseguir acessar o atributo destinationcardelement
  const destinationPage = new Destinations()
  beforeAll(() => {
    // Abrir a pagina principal
    // new Home().visit()

    // alterar a url da principal para a da destination
    browser.get('https://lit-chamber-61567.herokuapp.com/destinations/3')
  })

  describe('And there are images', () => {
    it('Then it render the imagecards', () => {
      helper.waitForElementVisibility(destinationPage.destinationcardelement)

      expect(destinationPage.destinationcardelement.getText()).toBe('330f900d-9f4d-4524-af83-8ec21912bb4b')
    })
  })
})
