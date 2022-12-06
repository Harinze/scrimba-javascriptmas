// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos! 

function getRandomNumberOfTacos() {
    /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */
    
    return new Array(Math.floor(Math.random() * 10 + 1)).fill("🌮")

}

function putTacosOnTray() {
    return getRandomNumberOfTacos().map( (item) =>
        `<div class="taco">${item}</div>`
    ).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()
