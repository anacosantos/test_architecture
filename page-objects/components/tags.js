const { element } = require("protractor")

class Tags {
    constructor(){
        this.cardElementHtml = element.all(by.css('.tags .cards .card'))
        this.firstCard = this.cards.first()
        this.imageOfFirstCard = this.first.element(by.css('img'))
        this.headingOfFirstCard = this.first.element(by.css('h2'))
        this.imageOfFirstCard = this.first.element(by.css('a'))
    }
}

module.exports = Tags