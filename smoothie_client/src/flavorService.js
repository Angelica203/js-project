class FlavorService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getFlavors(){
        fetch(`${this.endpoint}/flavors`)
        .then(resp => resp.json())
        .then(flavors => {
            for (const flavor of flavors){
                const f = new Flavor(flavor)
                f.slapOnDom()
            }
        })
    }
    
//refactor into instance method
    createFlavor(){
        const flavor = {
            name: document.getElementById('name').value,
            ingredient: document.getElementById('ingredient').value,
            smoothie_id: 1
            //change the number
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(flavor)
        }
        fetch(`${this.endpoint}/flavors`, configObj)
        .then(resp => resp.json())
        .then(flavor => {
            const f = new Flavor(flavor)
            f.slapOnDom()
        })
    }

        deleteFlavor(id){

            fetch(`${this.endpoint}/flavors/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(json => {debugger;})
        }
    }