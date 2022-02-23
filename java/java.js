// Carne - 400 gr por pessoa  + de 6 horas - 650
// cerveja - 1200ml por Pessoa + 6 horas - 2000 ml 
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    


    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2 * criancas);
 
    resultado.innerHTML =`<h5> VOCÊ PRECISA DE:</h5>`
    resultado.innerHTML +=  `<div class="result">
    <img  src="https://cdn-icons-png.flaticon.com/512/1826/1826259.png"/> <p>${qtdTotalCarne / 1000} Kg de Carne</p>  </div>`
    resultado.innerHTML += `<div class="result">
    <img src="https://cdn-icons-png.flaticon.com/512/1651/1651868.png"/>  <p>${Math.ceil(qtdTotalCerveja/355)}  Latas de Cerveja</p></div>`

    resultado.innerHTML += `<div class="result"><div class="result">
    <img src="https://cdn-icons-png.flaticon.com/512/68/68955.png"/> <p>${Math.ceil(qtdTotalBebidas/2000)} Garrafas de Bebidas</p></div>`
    
}

function carnePP(duracao){
   
    if(duracao >= 6){
         return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
   
    if(duracao >= 6){
         return 2000;
    } else {
        return 1200;
    }
}


function bebidasPP(duracao){
   
    if(duracao >= 6){
         return 1500;
    } else {
        return 1000;
    }
}