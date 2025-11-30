function cadastrarUsuario() {
    // Captura os valores de cada campo
    const nome = document.getElementById("nome").value;
    const dataNasc = document.getElementById("dataNasc").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const cidade = document.getElementById("cidade").value;
    const uf = document.getElementById("uf").value;

    // Seleciona o parágrafo de resultado
    const resultado = document.getElementById("resultado");

    // Monta a frase com template string
    resultado.innerText = `${nome} nasceu no dia ${dataNasc} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${uf}.`;

    // Define estilo do parágrafo
    resultado.style.color = "green";
    resultado.style.fontSize = "24px";
}
