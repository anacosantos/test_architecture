const faker = require('faker')
const { browser } = require('protractor')
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
    helper.waitForElementVisibility(editDestination.form.nameLabel)
    helper.waitForElementVisibility(editDestination.form.nameInput)
    helper.waitForElementVisibility(editDestination.form.descriptionLabel)
    helper.waitForElementVisibility(editDestination.form.descriptionInput)
    helper.waitForElementVisibility(editDestination.form.updateButton)
  })

  describe('When I submit the form with less than minimum require characteres ', ()=>{
    beforeEach(()=>{
      editDestination
      .form
      .submitFormAfterClearingAndFillingItWith('Ab', 'abcdefghi' )
    })
    
    it('Then both fields are are wrapped in a .field_with_erros div', ()=>{
      helper.waitForElementVisibility(editDestination.form.nameInputWithError)
      helper.waitForElementVisibility(editDestination.form.descriptionInputWithError)
    })
  })

  describe('When sucessfully submitting for the form with a new name and description,',()=>{
    let destinationUrl
    const randomUuid = faker.random.uuid()
    const fiveRandomWords = faker.random.words(5)

    beforeEach(()=>{
      browser.getCurrentUrl().then(url => {
        destinationUrl = url.replace('/edit' , '')
      })
    })
  })
})
