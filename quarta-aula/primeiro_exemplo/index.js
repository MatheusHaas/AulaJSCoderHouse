function dale(){
    let numero = prompt("Informe um numero")
    let numeroConvertido = parseInt(numero)

    if(numeroConvertido % 2 == 0){
        alert("O número " + numeroConvertido + " é par!")
        console.log(numeroConvertido % 2)
    } else {
        alert("O número " + numeroConvertido + " é ímpar!")
        console.log(numeroConvertido % 2)
    }
}

dale()