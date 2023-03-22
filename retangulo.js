function retangulo() {
    var largura = document.getElementById("largura").value;
    var altura = document.getElementById("altura").value;
    var comprimento = document.getElementById("comprimento").value;
    var material = document.getElementById("material").value;
    var pesoEsp = 0;

    Number(largura)
    Number(altura)
    Number(comprimento)
    
switch (material) {

case "1":
pesoEsp = 2.7;
break;
case "2":
pesoEsp = 8.0;
break;
case "3":
pesoEsp = 8.9;
break;
case "4":
pesoEsp = 8.8;
break;
}

var peso = largura * comprimento * altura * pesoEsp
var conversao = peso / 1000000;
var conversao2 = peso / 1000;

for(let i = 0; i < 1; i++){
    var kg = prompt("Insira o peso comprado")

    var pecas = Number(kg) / conversao
}

window.scrollTo(0, 500);

document.getElementById("kg").innerText = `${conversao} kg`
document.getElementById("g").innerText = `${conversao2} g`
document.getElementById("pecas").innerText = `${pecas.toFixed(1)} peças totais`

}
