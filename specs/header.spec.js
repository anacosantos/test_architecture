
const helper = require('protractor-helper')
const pagerSorter =  Math.floor(Math.random() * 4);//gera n° entre 0 e 3

const pages = [
    require('../page-objects/home'),
    require('../page-objects/components/tag'),
    require('../page-objects/destinationeach'),
    require('../page-objects/editDestination')
]

describe('Given I\'m at a random page of the app', ()=>{
    let randomPage

    beforeEach(()=>{

        randomPage = new pages[pagerSorter]()
        randomPage.visit()

        console.log('carol'+randomPage.visit())
    })

    it('Then I see an achor to the home in the header', ()=>{
        helper.waitForElementVisibility(randomPage.header.anchorToHome)
    })
})