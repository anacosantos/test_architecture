const { element } = require("protractor")

class Tags {
    constructor(){
        this.cardElementHtml = element.all(by.css('.tags .cards .card'))
    }
}

module.exports = Tags