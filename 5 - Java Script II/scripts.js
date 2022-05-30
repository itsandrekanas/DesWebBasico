function condicional() {
    var a = 5;
    var b = 10;
    var resultado;

    var num_dia = window.prompt("Informe um número? ");

    // SWITCH

    switch (num_dia) {
        case '1':
            resultado = "Domingo";
            break;
        case '2':
            resultado = "Segunda-feira";
            break;
        case '3':
            resultado = "Terça-feira";
            break;
        case '4':
            resultado = "Quarta-feira";
            break;
        case '5':
            resultado = "Quinta-feira";
            break;
        case '6':
            resultado = "Sexta-feira";
            break;
        case '7':
            resultado = "Sábado";
            break;

    }
    
    // IF e ELSE

    // if(a > b){
    //    resultado =  "A é maior que B.";
    // } else {
    //     resultado = "B é igual ou maior que A.";
    // }

    // TERNARIO

    // resultado = (a > b) ? "A é mior que B.": "B é maior ou igual a A";

    document.getElementById("resultado").innerHTML = resultado;
}

function repeticao(){
    // num = 1;
    resultado = 0;

// FOR

    for(num = 0; num <=10 ; num+=2){
        resultado += num;
    }

// WHiLE

    // while(num <= 5){
    //     resultado += num;
    //     num++;
    // }

// DO WHiLE

    // do{
    //     resultado += num;
    //     num++;
    // } while(num <= 5);

    // document.getElementById("resultado2").innerHTML = " O resultado é " + resultado + ". A variável número possui o valor " + num + ".";

    document.getElementById("resultado2").innerHTML = `O resultado é ${resultado}. A variável número possui o valor ${num} . `;
}