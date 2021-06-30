class SmoothieService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

 getSmoothies(){
        fetch(`${this.endpoint}/smoothies`)
        .then(resp => resp.json())
        .then(smoothies =>
            {debugger}
            )

    }

    // getSmoothies(){
    //     fetch(`${this.endpoint}/smoothies`)
    //     .then(resp => resp.json())
    //     .then(smoothies => {
    //         for (const smmoothie of smoothies){
    //             // console.log(this.name)
    //         }
    //         for (const smoothie of smoothie){
    //             const s = new Smoothie(smoothie)
    //         }
    //     })
    // }
    

}