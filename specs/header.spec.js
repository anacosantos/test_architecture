
const helper = require('protractor-helper')
const pagerSorter = require('../utils/pagerSorter')

const pages = [
  require('../page-objects/home'),
  require('../page-objects/components/tag'),
  require('../page-objects/destinationeach'),
  require('../page-objects/editDestination')
]

describe('Given I\'m at a random page of the app', () => {
  let randomPage

  beforeEach(() => {
    randomPage = new pages[pagerSorter()]()
    randomPage.visit()
  })

  it('Then I see an achor to the home in the header', () => {
    helper.waitForElementVisibility(randomPage.header.anchorToHome)
  })
})
