const TagsComponent = require('./components/tags')

class Home {
    constructor(){
        this.tagsComponent = new TagsComponent()
    }

    visit() {
        browser.get('https://lit-chamber-61567.herokuapp.com/')
    }
}

module.exports = Home