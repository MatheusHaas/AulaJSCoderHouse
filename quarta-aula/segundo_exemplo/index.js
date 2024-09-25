let numero1 = prompt("Informe um número")
let numero2 = prompt("Informe outro número")


function subtrairNumeros(numero1, numero2){
    let num1 = parseInt(numero1)
    let num2 = parseInt(numero2)
    if(num1 > num2){
        console.log(num1 - num2)
        console.log(num1 + " é maior")
    } else {
        console.log(num2 - num1)
        console.log(num2 + " é maior")
    }
}

subtrairNumeros(numero1, numero2)