function mudarForma() {
    // Seleciona a div e o botão
    const div = document.getElementById("forma");
    const btn = document.getElementById("btn-forma");

    // Alterna entre círculo e quadrado
    if (div.style.borderRadius === "50%") {
        div.style.borderRadius = "0%"; // quadrado
        btn.innerText = "Retornar forma original"; // altera o texto do botão
    } else {
        div.style.borderRadius = "50%"; // círculo
        btn.innerText = "Mudar forma"; // retorna o texto original
    }
}
