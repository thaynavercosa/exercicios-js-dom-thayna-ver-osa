// Função que captura o valor do input e altera o h1
function inserirTitulo() {
    // Captura o valor digitado no input
    const valorInput = document.getElementById("txt-titulo").value;

    // Seleciona o h1 pelo id
    const titulo = document.getElementById("titulo");

    // Insere o valor no h1
    titulo.innerText = valorInput;

    // Altera a cor do texto para azul
    titulo.style.color = "blue";
}
