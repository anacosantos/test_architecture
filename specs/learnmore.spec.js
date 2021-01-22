const ExpectedConditions = require('protractor')
const helper = require ('protractor-helper')
const LearnMore = require('../page-objects/components/learnmore')
const Home = require('../page-objects/home')


describe('Given I\'m at the home page', () =>{
    
//criar uma instancia Learnmore
  let learnmore = new LearnMore()
  beforeAll(() => {

    new Home().visit()

    //alterar a url da principal para tag desejada
    browser.get('https://lit-chamber-61567.herokuapp.com/tags/1')
   
  })

  describe('And there are images', ()=>{
    it('Then it render the imagecards', ()=>{
      helper.waitForElementVisibility(learnmore.beacheslement)
      expect(learnmore.beacheslement.getText()).toBe('Beaches')
    })
  })
  describe('And there are images', ()=>{
    it('Then it render the imagecards', ()=>{
        browser.get('https://lit-chamber-61567.herokuapp.com/tags/2')
      helper.waitForElementVisibility(learnmore.historylement)
      expect(learnmore.historylement.getText()).toBe('History')
    })
  })
  describe('And there are images', ()=>{
    it('Then it render the imagecards', ()=>{
        browser.get('https://lit-chamber-61567.herokuapp.com/tags/3')
      helper.waitForElementVisibility(learnmore.skiingelement)
      expect(learnmore.skiingelement.getText()).toBe('Skiing')
    })
  })
  describe('And there are images', ()=>{
    it('Then it render the imagecards', ()=>{
        browser.get('https://lit-chamber-61567.herokuapp.com/tags/4')
      helper.waitForElementVisibility(learnmore.adventurelement)
      expect(learnmore.adventurelement.getText()).toBe('Adventure')
    })
  })
  describe('And there are images', ()=>{
    it('Then it render the imagecards', ()=>{
        browser.get('https://lit-chamber-61567.herokuapp.com/tags/')
      helper.waitForElementVisibility(learnmore.familyelement)
      expect(learnmore.familyelement.getText()).toBe('Family')
    })
  })
})