numero = (a , b) => (a - b)

let numeros = 0
numerosNoArray = []

for (i=1; i<=5; i++){
    numeros = Number( prompt(`Digite ${i}º numero`) )
    numerosNoArray.push(numeros)
    
}
 let numerosOrdenados = numerosNoArray.sort(numero)


function mostrarValores(){

    document.write(numerosOrdenados)

}