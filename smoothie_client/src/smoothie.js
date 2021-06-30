class Smoothie{
    static all = []
    constructor({name, image_url}){
        this.name = name
        this.image_url = image_url

        this.element = document.createElement('li')
        this.element.dataset = this.id
        this.id =`smoothie-${this.id}`

        Smoothie.push.all = (this)

    }

    smoothieHTML(){

    }
    // slapOnDom(){
    //     Smoothie.smoothieContainer.append(this.smoothieHTML())

    // }


}       