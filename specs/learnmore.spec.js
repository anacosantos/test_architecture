const helper = require('protractor-helper')
const LearnMore = require('../page-objects/components/learnmore')
const Home = require('../page-objects/home')

describe('Given I\'m at the home page', () => {
// criar uma instancia Learnmore
  const learnmore = new LearnMore()
  let url
  beforeAll(() => {
    new Home().visit()

    // alterar a url da principal para tag desejada
    url = 'https://lit-chamber-61567.herokuapp.com/tags/'
  })

  describe('And there are images', () => {
    it('Details beaches', () => {
      browser.get(url + '1')
      helper.waitForElementVisibility(learnmore.beacheslement)
      expect(learnmore.beacheslement.getText()).toBe('Beaches')
    })
  })
  describe('And there are images', () => {
    it('Details history', () => {
      browser.get(url + '2')
      // browser.get('https://lit-chamber-61567.herokuapp.com/tags/2')
      helper.waitForElementVisibility(learnmore.historylement)
      expect(learnmore.historylement.getText()).toBe('History')
    })
  })
  describe('And there are images', () => {
    it('Details skiing', () => {
      browser.get(url + '3')
      helper.waitForElementVisibility(learnmore.skiingelement)
      expect(learnmore.skiingelement.getText()).toBe('Skiing')
    })
  })
  describe('And there are images', () => {
    it('Details adventure', () => {
      browser.get(url + '4')
      helper.waitForElementVisibility(learnmore.adventurelement)
      expect(learnmore.adventurelement.getText()).toBe('Adventure')
    })
  })
  describe('And there are images', () => {
    it('Details family', () => {
      browser.get(url + '5')
      helper.waitForElementVisibility(learnmore.familyelement)
      expect(learnmore.familyelement.getText()).toBe('Family')
    })
  })
})
