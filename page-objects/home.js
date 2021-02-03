const TagsComponent = require('./components/tags')
const HeaderComponent = require('../page-objects/components/header')

class Home {
  constructor () {
    this.header = new HeaderComponent()
    this.tagsComponent = new TagsComponent()
  }

  visit () {
    browser.get('/')
  }
}

module.exports = Home
