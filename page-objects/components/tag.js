const { browser } = require('protractor')
const DestinationsComponent = require('./nvdestinations')

class Tag {
  constructor () {
    this.nvdestinations = new DestinationsComponent()
  }

  visit () {
    const randomNumberBetweenOneandFive = Math.floor(Math.random() * 5 + 1)
    browser.get(`/tags/${randomNumberBetweenOneandFive}`)
  }
}

module.exports = Tag
