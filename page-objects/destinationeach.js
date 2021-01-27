const { browser } = require('protractor')

const Destinationeachcomp = require('../page-objects/components/destinationeachcomp')
const randomNumberBetweenOneand = require('../page-objects/components/destinationeachcomp')

class Destinationeach {
  constructor () {
    this.self = Destinationeachcomp()
  }

  visit () {
    browser.get(`/destinations/${randomNumberBetweenOneand(15)}`)
  }
}

module.exports = Destinationeach