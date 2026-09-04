const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    try {

        const resposta = await fetch("http://localhost:3000/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                senha: senha
            })
        });

        const resultado = await resposta.json();

        if (!resposta.ok) {

            message.textContent = resultado.mensagem;
            message.style.color = "#dc2626";

            return;
        }

        localStorage.setItem(
            "usuarioLogado",
            JSON.stringify(resultado.usuario)
        );

        window.location.href = "home.html";

    } catch (erro) {

        message.textContent =
            "Não foi possível conectar com a API.";

        message.style.color = "#dc2626";

        console.error(erro);
    }
});


const forgotPassword = document.getElementById("forgotPassword");

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    message.textContent =
        "Instruções para recuperação de senha enviadas.";

    message.style.color = "#2563eb";
});