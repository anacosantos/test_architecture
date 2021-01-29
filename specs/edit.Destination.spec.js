const helper= require('protractor-helper')

const EditDestination = require('../page-objects/editDestination')

describe('Given I\'m at a random edit destination page', ()=>{
  let editDestination

  beforeEach(()=>{
    editDestination = new EditDestination()
    editDestination.visit()    
  })

  it('then I see an image, and a form to edit tha name and description', ()=>{
    helper.waitForElementVisibility(editDestination.self.image)
  })
})
