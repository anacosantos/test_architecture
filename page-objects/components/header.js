class HeaderComponent {
  constructor () {
    this.self = element(by.className('header'))
    this.anchorToHome = this.self.element(by.css('a[href="/"]'))
  }
}

module.exports = HeaderComponent
