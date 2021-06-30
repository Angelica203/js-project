class FlavorService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getFlavor(){
        fetch(`${this.endpoint}/flavors`)
        .then(resp => resp.json())
        .then(flavors => {
            for (const flavor of flavors){
                const f = new Flavor(flavor)
                f.slapOnDom()
            }
        })
    }
    
    }