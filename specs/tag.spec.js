const helper = require('protractor-helper')
const Tag = require('../page-objects/components/tag')

describe('Given I\'m at a random tag page', () => {
  let tag
  beforeAll(() => {
    tag = new Tag()
    tag.visit()
  })

  describe('And there are three destinations for this tag in the database', () => {
    it('Then they all render as cards', () => {
      helper.waitForElementVisibility(tag.nvdestinations.cards.last())
      expect(tag.nvdestinations.cards.count()).toBe(3)
    })
  })

  describe('When I look to the first card in isolation', () => {
    it('Then I see an image, a heading, a paragraph and an anchor', () => {
      helper.waitForElementVisibility(tag.nvdestinations.imageOfFirstCard)
      helper.waitForElementVisibility(tag.nvdestinations.headingOfFirstCard)
      helper.waitForElementVisibility(tag.nvdestinations.paragraphOfFirstCard)
      helper.waitForElementVisibility(tag.nvdestinations.anchorOfFirstCard)
    })
  })
})
