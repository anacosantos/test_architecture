class Destinations {
    constructor() {
       // this.destinationcardelement = element.all(by.css('.destination'))
       this.destinationcardelement =  element(by.xpath('/html/body/div[2]/div/div/div/h2'));
    }
}

module.exports = Destinations