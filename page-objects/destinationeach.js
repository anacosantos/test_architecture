const { browser } = require('protractor')

const Destinationeachcomp = require('../page-objects/components/destinationeachcomp')
const randomNumberBetweenOneAndN = require('../utils/randomNumberBetweenOneAndN')

class Destinationeach {
  constructor () {
    this.self = new Destinationeachcomp()
  }

  visit () {
    browser.get(`/destinations/${randomNumberBetweenOneAndN(15)}`)
  }
}

module.exports = Destinationeach
