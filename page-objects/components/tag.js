const { browser } = require('protractor')
const NovaDestinations = require('./nvdestinations')
const randomNumberBetweenOneandFive = require('../../utils/randomNumberBetweenOneAndN')
class Tag {
  constructor () {
    this.nvdestinations = new NovaDestinations()
  }

  visit () {
    browser.get(`/tags/${randomNumberBetweenOneandFive()}`)
  }
}

module.exports = Tag
