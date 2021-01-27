const TagsComponent = require('./components/tags')

class Home {
    constructor(){
        this.tagsComponent = new TagsComponent()
    }

    visit() {
        browser.get('/')
    }
}

module.exports = Home