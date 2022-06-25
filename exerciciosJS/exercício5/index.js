let dadosAlunos = {
    Nome:"Guilherme",
    Curso: "Recode Pro",
    Modulo: "JavaScript",
    Professor: "Artur Brandt"
}

let propiedades = [] = Object.keys(dadosAlunos)
let valores = [] = Object.values(dadosAlunos)

let th = []
let td = []

let trh = document.createElement('tr')
let trd = document.createElement('tr')
let table = document.createElement('table')

for (i=0; i<=3 ; i++){
    th[i] = document.createElement('th')
    td[i] = document.createElement('td')

    th[i].innerHTML = propiedades[i]
    td[i].innerHTML = valores[i]
}

for(let i=0; i<=3; i++){
    trh.appendChild(th[i])
    trd.appendChild(td[i])
}

table.setAttribute('border','1')
table.appendChild(trh)
table.appendChild(trd)

document.body.appendChild(table)