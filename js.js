function calcGorjeta(){
    var totalConta = document.getElementById("Valor-conta").value;
    var totalPessoas = document.getElementById("Quant-pessoas").value;

    if (totalConta === 0 || isNaN(totalConta) || isNaN(totalPessoas) || "") {
        alert("Por favor, digite um valore valido!");
        return;
    }
}
document.getElementById("calcular").onclick = function(){
    calcGorjeta();
}