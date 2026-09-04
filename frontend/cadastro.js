const cadastroForm = document.getElementById("cadastroForm");

cadastroForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const dataNascimento = document.getElementById("dataNascimento").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    const temOitoCaracteres = senha.length >= 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temCaracterEspecial = /[^A-Za-z0-9]/.test(senha);

    if (!temOitoCaracteres) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return;
    }

    if (!temMaiuscula) {
        alert("A senha deve conter pelo menos uma letra maiúscula.");
        return;
    }

    if (!temCaracterEspecial) {
        alert("A senha deve conter pelo menos um caractere especial.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    try {

        const resposta = await fetch("http://localhost:3000/usuarios", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                data_de_nascimento: dataNascimento,
                senha: senha
            })
        });

        const resultado = await resposta.json();

        if (!resposta.ok) {
            alert(resultado.mensagem);
            return;
        }

        alert("Usuário cadastrado com sucesso!");

        cadastroForm.reset();

    } catch (erro) {

        alert("Não foi possível conectar com a API.");

        console.error(erro);
    }
});