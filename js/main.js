const n = Number(prompt('Dati un numar'))
let app = document.getElementById('app')

for (let i = 0; i < n; i++) {
    let numarAleatoriu = Math.floor(Math.random() * 100)
    if (numarAleatoriu % 2 == 0){
    app.innerHTML +=`<div class="patrat par">
     ${numarAleatoriu}
     </div> `   
}else{
    app.innerHTML +=`<div class="patrat impar">
     ${numarAleatoriu}
     </div> `
   
    }

}