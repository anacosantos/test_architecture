const Form = require('../page-objects/components/form')
const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN')
const { browser } = require('protractor')
const Destinationeachcomp = require('../page-objects/components/destinationeachcomp')

class EditDestination {
    constructor(){
       this.self = new Destinationeachcomp()
       this.form = new Form()
    }

    visit () {
        browser.get(`destinations/${randomNumberBetweenOneAnd(15)}/edit`)
    }
    
}

module.exports = EditDestination
