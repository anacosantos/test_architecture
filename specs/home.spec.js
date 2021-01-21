const { ExpectedConditions } = require('protractor')
const helper = require ('protractor-helper')
const { Home } = require('../page-objects/home')

describe('Given I\'m at the home page', () =>{
  let homepage

  beforeAll(() => {
      homepage = new Home();  
      homepage.visit() 
  })

describe('And there are five tags in the database', ()=>{
      it('Then they all render as cards', ()=>{
        helper.waitForElementVisibility(homepage.tags.cards.last())

        expect(homepage.tags.cards.count().toBe(5))
      })
    })
})  