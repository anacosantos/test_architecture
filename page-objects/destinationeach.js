const { browser } = require('protractor')
const HeaderComponent = require('../page-objects/components/header')

const Destinationeachcomp = require('../page-objects/components/destinationeachcomp')
const randomNumberBetweenOneAndN = require('../utils/randomNumberBetweenOneAndN')

class Destinationeach {
  constructor () {
    this.header = new HeaderComponent()
    this.self = new Destinationeachcomp()
  }

  visit () {
    browser.get(`/destinations/${randomNumberBetweenOneAndN(15)}`)
  }
}

module.exports = Destinationeach
