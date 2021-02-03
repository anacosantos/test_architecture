const { browser } = require('protractor')
const NovaDestinations = require('./nvdestinations')
const HeaderComponent = require('../components/header')
const randomNumberBetweenOneAnd = require('../../utils/randomNumberBetweenOneAndN')
class Tag {
  constructor () {
    this.nvdestinations = new NovaDestinations()
    this.header = new HeaderComponent()
  }

  visit () {
    browser.get(`/tags/${randomNumberBetweenOneAnd(5)}`)
  }
}

module.exports = Tag
