const ExpectedConditions = require('protractor')
const helper = require ('protractor-helper')
const Home = require('../page-objects/home')


describe('Given I\'m at the home page', () =>{
  let homepage

  beforeAll(() => {
      homepage = new Home()
      homepage.visit() 
  })

  describe('And there are five tags in the database', ()=>{
    it('Then they all render as cards', ()=>{
     helper.waitForElementVisibility(homepage.tagsComponent.cards.last())
     
     expect(homepage.tagsComponent.cards.count()).toBe(5)
      })

    describe('When I look to the first card in isolation', ()=>{
      it('Then I see an image, a heading, and an anchor',()=>{
       helper.waitForElementVisibility(homepage.tagsComponent.imageOfFirstCard)
       helper.waitForElementVisibility(homepage.tagsComponent.headingOfFirstCard)
       helper.waitForElementVisibility(homepage.tagsComponent.anchorOfFirstCard)
      })
    })
  })
})  