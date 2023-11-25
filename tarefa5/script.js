
function alerta(){
    let numero1 = 10;
    let numero2 = 100;
    let soma = numero1 + numero2;
    let subtrair = numero1 - numero2;
    let divisao = numero1 / numero2;
    let multiplicacao = numero1 *  numero2;
    let parseFloat = "Valores: "+ numero1 +" e "+ numero2 + "\nSoma: " + soma + "\n" + "Subtração: "  + subtrair + "\n" + "Divisão: " + divisao + "\n" + "Multiplicação: " + multiplicacao;
    alert(parseFloat)
} 

function loop(){
    let numb = 10;
    var array = []
    for (let index = 10; index <= 100; index++) {
        array[index] = numb ++;   
        document.getElementById('floatingTextarea').value = array
    }  
}



function calcularTabuada5() {

document.getElementById('txtex3').value = '';


var numero = 5;


for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    
    document.getElementById('txtex3').value += numero + " x " + i + " = " + resultado + "\n";
}
}


function calcularTabuada() {

document.getElementById('txtex4').value = '';


var numero = document.getElementById('numT').value;


if (numero === '' || isNaN(numero)) {
    alert('Por favor, insira um número válido para a tabuada.');
    return;
}


numero = parseInt(numero);


for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    document.getElementById('txtex4').value += numero + " x " + i + " = " + resultado + "\n";
}
}




function calcular(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;
    switch(operacao){
        case '+':
            document.getElementById("resultado").value = num1 + num2;
            break;
        case '-':
            document.getElementById("resultado").value = num1 - num2;
            break;
        case '*':
            document.getElementById("resultado").value = num1 * num2;
            break;
        case '/':
            document.getElementById("resultado").value = num1 / num2;
            break; 
        

    }
}

function par(){
    let array = [1,2,3,4,5,6,7,8,9,10];
    let par = [];
    let i =0;
    for (let index = 1; index <= array.length; index++) {
        if(index%2==0){
            par[i] = index;
            i++;
            document.getElementById('txt3').value = par;
        }  
    }
}

function custoF(){
    let custoFabrica = document.getElementById('custoFabrica').value;
    let distribuidor = document.getElementById('percDistribuidor').value;
    let imposto = document.getElementById('percImpostos').value;
    let percDistribuidor = distribuidor / 100;
    let percImpostos = imposto / 100;
    let valorDist = parseFloat(custoFabrica) * percDistribuidor;
    let valorImp = parseFloat(custoFabrica) * percImpostos; 
    let valorfinal = parseFloat(custoFabrica)  + parseFloat(valorDist) + parseFloat(valorImp); 
    var valorF = valorfinal.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'});
    console.log(percDistribuidor);
    console.log(percImpostos);
    console.log(valorDist);
    console.log(valorImp);
    document.getElementById("valorfinal").value = valorF;
   
}