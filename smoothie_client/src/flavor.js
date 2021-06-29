class Flavor {
    static all = []
    static flavorContainer = document.getElementById("flavor-container")

    constructor({id, name, ingredient, smoothie_id}){
        this.id = id
        this.name = name
        this.ingredient = ingredient
        this.smoothie_id = smoothie_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `flavor-${this.id}`

        Flavor.all.push(this)
    }


    flavorHTML(){
        this.element.innerHTML += `
        <div>
        <h3>${this.name}</h3>
        <p>${this.ingredient}</p>
        </div>
        `
        return this.element
    }

    slapOnDom(){
        Flavor.flavorContainer.appendChid(flavor)
    }
}