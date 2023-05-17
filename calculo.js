
var multa = 4;
var limite = 50;
var e
var resultado 

function Calcular(){
    var p = Number(document.getElementById('peso').value);

    if(p > limite){
        e = p - limite;
        valorMulta = e * multa;
        resultado = document.getElementById('multa').innerHTML = `O valor da multa é de ${valorMulta}R$ e o peso excedido foi de ${e} Kg`;
         
    }else{
        resultado = document.getElementById('sem-multa').innerHTML = `Não houve multa, o peso do peixe não atingiu o excesso`;
        
    }
}

