class SmoothieService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getSmoothies(){
        fetch(`${this.endpoint}/smoothies`)
        .then(resp => resp.json())
        .then(smoothies => {
        //     for (const smoothie of smoothies){
        //         const s = new Smoothie(smoothie)
        //         // s.slapOnDom()
        //     }
        })
    }
    

}