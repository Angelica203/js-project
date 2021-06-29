//any global variables
const base_url = 'http://127.0.0.1:3000'
const flavorService = new FlavorService(base_url)

flavorService.getFlavors()
//initialization of the application