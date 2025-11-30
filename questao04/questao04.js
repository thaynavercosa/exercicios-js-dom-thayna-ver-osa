function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const mensagem = document.getElementById("mensagem");

    if (!nome || !cpf) {
        mensagem.innerText = "Os campos Nome e CPF são obrigatórios.";
        mensagem.style.color = "red";
        return;
    }

    const cpfValido = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if (!cpfValido.test(cpf)) {
        mensagem.innerText = "CPF inválido! Use o formato 000.000.000-00.";
        mensagem.style.color = "red";
    } else {
        mensagem.innerText = "Cadastro validado com sucesso!";
        mensagem.style.color = "green";
    }
}

