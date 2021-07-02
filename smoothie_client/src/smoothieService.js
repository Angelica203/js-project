class SmoothieService{

    constructor(){
        this.base_url = 'http://127.0.0.1:3000/smoothies'
    }

    getSmoothies(){
        fetch(this.base_url)
        .then(resp => resp.json())
        .then(response =>{
            response.data.forEach(el => {
                this.sanitizeAndInitializeSmoothie(el)   
            })
             
        })
    }

    sanitizeAndInitializeSmoothie(data){
        let s = new Smoothie(smoothie)
        s.slapOnDom()
    }
}