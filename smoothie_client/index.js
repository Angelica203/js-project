// any global variables
const base_url = 'http://127.0.0.1:3000'
const flavorService = new FlavorService(base_url)
const smoothieService = new SmoothieService(base_url)

flavorService.getFlavors()
Flavor.renderForm()

function handleSubmit(){
    event.preventDefault()
    flavorService.createFlavor()
    event.target.reset()

}

// const smoothie = new SmoothieService(base_url)
// Flavor.flavorForm.addEventListener('submit', handleSubmit)
//initialization of the application

// function renderSmoothies(){
//     let smoothie = smoothies.data
//     smoothie.forEach(smoothie =>{
//         renderSmoothie(smoothie)
//     })
// }
// const smoothieService = new smoothieService(base_url)
