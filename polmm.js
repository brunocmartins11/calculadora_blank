function polmm(){
    var pol1 = document.getElementById("pol1").value;
    var pol2 = document.getElementById("pol2").value;

    var div = pol1 / pol2;
    var mm = div * 25.4;


    document.getElementById("mm").innerText = `${mm.toFixed(3)} mm`
}