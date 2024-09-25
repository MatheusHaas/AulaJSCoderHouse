
const calculadora = (num1, num2, operation) => {
    if(operation === "*"){
        return num1 * num2
    }
    
    if(operation == "/"){
        return num1 / num2
    }
    
    if(operation == "+"){
        return num1 + num2
    }
    
    if(operation == "-"){
        return num1 - num2
    }else {
        return 0
    }
}

alert(calculadora(3, 3, "*"))