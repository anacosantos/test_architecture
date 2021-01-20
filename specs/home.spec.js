const Home = require('../page-objects/home')

describe('Given I\'m at the home page', () =>{
    let homepage

    beforeAll(() => {
      homepage = new Home() 
      homepage.visit() 
    })
})