function atv_01(){
    
    var n1 = Number(window.prompt("Digite um número: "));
    var n2 = Number(window.prompt("Digite outro número: "));

    var result = (n1 < n2) ? "Ordem: " + n1 + " - " + n2 : "Ordem: " + n2 + " - " + n1;

    document.getElementById("resultado").innerHTML = result;
}

function atv_02(){

    var altura = Number(window.prompt("Digite a altura da pessoa: "));
    var genero = window.prompt("Digite o gênero da pessoa: ");
    var peso;

    switch(genero){
        case 'masculino': 
        peso = (72.7 * altura) - 58;
        break;
        case 'feminino':
        peso = (62.1 * altura) - 44.7;
    }

    document.getElementById("resultado").innerHTML = "Peso ideal da pessoa: " + peso.toFixed(2);
}

function atv_03(){
    var n1 = Number(window.prompt("Digite o primeiro número: "));
    var n2 = Number(window.prompt("Digite o segundo número: "));
    var n3 = Number(window.prompt("Digite o terceiro número: "));

    var menor = n1;

    if(n2 < menor){
        menor = n2;
    }
    if(n3 < menor){
        menor = n3;
    }

    document.getElementById("resultado").innerHTML = "Menor número:  " + menor;
}

function atv_04(){
    var num = Number(window.prompt("Digite um número: "));

    if(num >= 0 ){
        var result = (num % 2 == 0) ? "Valor par." : "Valor ímpar.";
    } else {
        num *= (-1);
        result = "Valor absoluto: " + num;
    }

    document.getElementById("resultado").innerHTML = result;
}

function atv_05(){
    var num = Number(window.prompt("Digite um número: "));

    if(num % 2 == 0 && num % 3 == 0){
        result = "O valor é divisível por 2 e 3.";
    } else {
        result = "O valor não é divisível por 2 e 3.";
    }

    document.getElementById("resultado").innerHTML = result;
}

function atv_06(){
    var num = Number(window.prompt("Digite um número: "));

    if(num % 2 == 0 || num % 7 == 0){
        result = "O valor é divisível por 2 ou 7.";
    } else {
        result = "O valor não é divisível por 2 ou 7.";
    }

    document.getElementById("resultado").innerHTML = result;
}

function atv_07(){
    var num = Number(window.prompt("Digite um número: "));

    switch (num) {
        case 1:
            resultado = "Domingo";
            break;
        case 2:
            resultado = "Segunda-feira";
            break;
        case 3:
            resultado = "Terça-feira";
            break;
        case 4:
            resultado = "Quarta-feira";
            break;
        case 5:
            resultado = "Quinta-feira";
            break;
        case 6:
            resultado = "Sexta-feira";
            break;
        case 4:
            resultado = "Sábado";
            break;
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function atv_08(){
    var soma = 0;

    for(i = 0; i<=20; i+=2){
        soma += i;
    }
    document.getElementById("resultado").innerHTML = "Soma dos valores pares entre 1 e 20: " + soma;
}

function atv_09(){
    var num = Number(window.prompt("Digite um número: "));
    var i = 1;

    document.getElementById("resultado").innerHTML = "";
    
   do{
        result = num * i; 
        document.getElementById("resultado").innerHTML += num + "x" + i + " = " + result + "<br>";
        i++;

    }while(i <= 10);
}

function atv_10(){
    var num = Number(window.prompt("Digite um número: "));
    
    result = 1;

    for(i = num; i > 0 ; i--){
         result = result * i;
    }

    document.getElementById("resultado").innerHTML = `Fatorial de ${num} é ${result}`;

}