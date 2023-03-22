function habilita() {
    if (document.getElementById('com').checked == true) {
        document.getElementById('furo').disabled = false;
    }
    else if (document.getElementById('com').checked == false) {
        document.getElementById('furo').disabled = true;
    }

}

function disco() {
    var diametro = document.getElementById("diametro").value;
    var altura = document.getElementById("altura").value;
    var material = document.getElementById("material").value;
    var furo = document.getElementById("furo").value;
    var pesoEsp = 0;

    Number(diametro)
    Number(altura)


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


    if (furo != null) {
        Number(furo)

        var raio = diametro / 2;
        var volume = 3.14 * (raio * raio) * altura;
        var totalDisco = volume * pesoEsp;

        var raioFuro = furo / 2;
        var volumeFuro = 3.14 * (raioFuro * raioFuro) * altura;
        var totalFuro = volumeFuro * pesoEsp;

        var total = totalDisco - totalFuro;



    } else {
        var raio = diametro / 2;
        var volume = 3.14 * (raio * raio) * altura;
        var total = volume * pesoEsp;

    }

    var conversao = total / 1000000;
    var conversao2 = total / 1000;

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
