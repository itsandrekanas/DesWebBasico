function btn_01(){
    window.alert("Você clicou no botão 1.");
}
function btn_02(){
    window.alert("Você clicou no botão 2.");
}
function btn_03(){
    window.alert("Você clicou no botão 3.");
}

function ativ_02(){
    var nome;
    var idade;
    
    nome = window.prompt("Informe o seu nome: ");
    idade = window.prompt("Informe a sua idade: ");
    window.alert("Acabei de conhecer " + nome + ", que tem " + idade + " anos de idade.");

}

function ativ_03(){
    
    var num = window.prompt("Informe o número: ");
    var antecessor = num - 1;
    var sucessor = parseInt(num) + 1;

    window.alert("O numero informado pelo usuário foi " + num + ". Antes do número " + num + " temos o número " + antecessor + ". Após o número " + num + " temos o número " + sucessor + ".");

}

function ativ_04(){
    
    var produto = window.prompt("Informe o nome do produto: ");
    var preco = Number(window.prompt("Informe o preco do produto: "));
    var valor_dinheiro = Number(window.prompt("Informe o valor entregue ao vendedor: "));
    
    var troco = valor_dinheiro - preco;

    window.alert("Você comprou um produto (" + produto + ") por R$ " + preco.toFixed(2) + " e entregou ao vendedor R$ " + valor_dinheiro.toFixed(2) + " em dinheiro. Você vai receber R$ " + troco.toFixed(2) + " de troco. Volte sempre!");

}

function ativ_05(){
    
    var celsius = window.prompt("Informe a temperatura em Celsius: ");
    var fahrenheit = (celsius * 9 / 5) + 32;

    window.alert("A temperatura em Fahrenheit é: " + fahrenheit +".");
}

function ativ_06(){
    
    var valor_reais = window.prompt("Informe o valor em reais: ");
    var cotacao = window.prompt("Informe o valor do dolar: ");
    
    var valor_dolar = valor_reais / cotacao;

    document.getElementById("resultado").innerHTML = "O valor em dólares é: "+ valor_dolar.toFixed(2) + ".";

}

function ativ_07(){
    
    var produto = window.prompt("Informe o nome do produto: ");
    var preco = Number(window.prompt("Informe o preco do produto: "));
    
    var preco_final = preco * 0.9;

    document.getElementById("resultado").innerHTML = "Você comprou um produto (" + produto + ") por R$ " + preco.toFixed(2) + " e acaba de ganhar um desconto de 10%. Assim, você vai pagar apenas R$" + preco_final.toFixed(2) + " pelo seu produto. Volte sempre!";
}

function ativ_08(){
    
    var tempo = window.prompt("Informe o tempo de viagem: ");
    var velocidade = window.prompt("Informe a velocidade media: ");

    var litros = tempo * velocidade / 12;

    document.getElementById("resultado").innerHTML = "Você gastou aproximadamente " + litros.toFixed(2) + " litros de combustível.";
}

var contador = 0;

function incrementar_contador(){
    
    contador++;

    document.getElementById("resultado").innerHTML = "O contador está com " + contador + " cliques.";
}

function zerar_contador(){
    
    contador = 0;

    document.getElementById("resultado").innerHTML = "O contador está com " + contador + " cliques.";
}

function ativ_10(){
    
    var num = Number(window.prompt("Informe o número: "));

    document.getElementById("raiz_quadrada").innerHTML = "A raiz quadrada de  " + num + " é: " + Math.sqrt(num).toFixed(2);

    document.getElementById("raiz_cubica").innerHTML = "A raiz cúbica de  " + num + " é: " + Math.cbrt(num).toFixed(2);

    document.getElementById("valor_quadrado").innerHTML = "O valor de " + num + "<sup>2</sup> é: " + Math.pow(num, 2).toFixed(2);

    document.getElementById("valor_cubico").innerHTML = "O valor de " + num + "<sup>3</sup> é: " + Math.pow(num, 3).toFixed(2);
}
