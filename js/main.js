const lluvia = document.querySelector(".lluvia")

function randomZindex() {
    return Math.floor(Math.random() * 9) + 1
}

function crearGotaDeLLuvia() {
    const gota = document.createElement('span')
    gota.className = 'gota'
    gota.textContent = Math.random() > 0.5 ? '0':'1'
    gota.style.left = `${Math.random() * 100}vw`
    gota.style.animationDuration = `${Math.random() * 5 + 3}s`
    gota.style.zIndex = randomZindex()
    return gota
}

for (let i = 0; i < 45; i++) {
    const gota = crearGotaDeLLuvia();
    gota.style.animationDelay = `${Math.random() * 5}s`
    lluvia.appendChild(gota)
    
}