function calc(operation) {
    x = Number(document.getElementById("num1").value);
    y = Number(document.getElementById("num2").value);
    switch(operation) {
        case '+': 
            result = x + y
            break
        case '-':
            result = x - y
            break
        case '*':
            result = x * y
            break
        case '/':
            if ( y == '0') {
                document.getElementById("resultnum").value = 'Деление на 0 недопустимо'
            return
               } 
            result = x / y
            break
    }
        document.getElementById("resultnum").value = result

}
   