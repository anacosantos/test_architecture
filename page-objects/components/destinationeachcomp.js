const { by } = require("protractor")

class Destinationeachcomp {
    constructor(){
        this.self = element(by.className('destination'))
        this.image = this.self.element(by.css('img'))
        this.heading =  this.self.element(by.css('ih2'))
        this.paragrap =  this.self.element(by.css('p'))
        this.anchor =  this.self.element(by.css('a'))
    }
}

module.exports = Destinationeachcomp
