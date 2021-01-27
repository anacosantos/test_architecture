const helper = require('protractor-helper')

const Destinationeach = require('../page-objects/destinationeach')

describe('Given I\'m at a random destination page', () => {
    let destinationeach

    beforeEach(() =>{
        destinationeach = new Destinationeach
        destinationeach.visit()
    })

    it('then I see an image, a heading, a paragraph, and an anchor', ()=>{
      helper.waitForElementVisibility(destinationeach.self.image)
      helper.waitForElementVisibility(destinationeach.self.heading)
      helper.waitForElementVisibility(destinationeach.self.paragraph)
      helper.waitForElementVisibility(destinationeach.self.anchor)
    })

})