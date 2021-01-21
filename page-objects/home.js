const TagsComponent = require('./components/tags')

export class Home {
    construtor(){
        this.tags = new TagsComponent()
    }
}
