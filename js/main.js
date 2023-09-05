const lluvia = document.querySelector(".lluvia")

function randomZindex() {
    return Math.floor(Math.random() * 9) + 1
}

function crearGotaDeLLuvia() {
    const gota = document.createElement('span')
    gota.className = 'gota'
    gota.textContent = Math.random() > 0.5 ? '0':'1'
    return gota
}

for (let i = 0; i < 100; i++) {
    const gota = crearGotaDeLLuvia();
    lluvia.appendChild(gota)
    
}