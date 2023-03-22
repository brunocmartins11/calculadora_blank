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

    if (confirm("Deseja converter o peso do material comprado para peças totais?") == true) {

        var material = prompt("Insira o peso comprado")

        var pecas = Number(material) / conversao

        document.getElementById("kg").innerText = `${conversao} kg`
        document.getElementById("g").innerText = `${conversao2} g`
        document.getElementById("materiais").innerText = `${material} kg de material`
        document.getElementById("pecas").innerText = `${pecas.toFixed(2)} peças totais`

    }
    else {
        alert("Você cancelou a operação!")

        document.getElementById("kg").innerText = `${conversao} kg`
        document.getElementById("g").innerText = `${conversao2} g`
    }

    window.scrollTo(0, 500);

}
