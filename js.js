function CalcJantar(){
    var valorTotal = document.getElementById("valor-conta").value;
    var quantPessoas = document.getElementById("quant-pessoas").value;

    var total = ((valorTotal * (10/100)) / quantPessoas);

    document.getElementById("valor-p-pesssoa").innerHTML = total;

}
document.getElementById("calcular").onclick = function(){
    CalcJantar();
}