class Smoothie{
    static all = []
    constructor({id,name, image_url}){
        this.id = id
        this.name = name
        this.image_url = image_url
        this.service = new SmoothieService()

        this.element = document.createElement('li')
        this.element.dataset = this.id
        this.id =`smoothie-${this.id}`

        Smoothie.push.all = (this)
        // const smoothie = new smoothie
        // console.log(this.name, this.image_url)

    }

        fullRender(){
            this.element.innerHTML +=`
            <div>
                <h3>${this.name}</h3>
                <p>${this.image_url}</p>
            </div>
            `
            return this.element
        }
    // smoothieHTML(){
        // this.element.innerHTML +=`
        // <div>
        //     <h1>${this.name}</h1>
        //     <p>${this.image_url}</p>
        // </div>
        // `
    //     return this.element
    // }
    slapOnDom(){
        Smoothie.smoothieContainer.append(this.smoothieHTML())

    }


}       