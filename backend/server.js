const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

// =====================================================
// GET /
// =====================================================

app.get("/", (req, res) => {
    res.json({
        mensagem: "API Shopping do QA funcionando!"
    });
});

// =====================================================
// GET /usuarios
// =====================================================

app.get("/usuarios", async (req, res) => {
    const { data, error } = await supabase
        .from("usuarios")
        .select("id, nome, sobrenome, email, data_de_nascimento");

    if (error) {
        return res.status(500).json({
            erro: error.message
        });
    }

    res.status(200).json(data);
});

// =====================================================
// POST /login
// =====================================================

app.post("/login", async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({
            mensagem: "E-mail e senha são obrigatórios."
        });
    }

    const { data, error } = await supabase
        .from("usuarios")
        .select("id, nome, sobrenome, email, data_de_nascimento")
        .eq("email", email)
        .eq("senha", senha)
        .single();

    if (error || !data) {
        return res.status(401).json({
            mensagem: "E-mail ou senha inválidos."
        });
    }

    res.status(200).json({
        mensagem: "Login realizado com sucesso.",
        usuario: data
    });
});

// =====================================================
// POST /usuarios
// =====================================================

app.post("/usuarios", async (req, res) => {
    const {
        nome,
        sobrenome,
        email,
        data_de_nascimento,
        senha
    } = req.body;

    // Validação dos campos obrigatórios
    if (
        !nome ||
        !sobrenome ||
        !email ||
        !data_de_nascimento ||
        !senha
    ) {
        return res.status(400).json({
            mensagem: "Todos os campos são obrigatórios."
        });
    }

    // Verifica se o e-mail já existe
    const { data: usuarioExistente } = await supabase
        .from("usuarios")
        .select("id")
        .eq("email", email)
        .maybeSingle();

    if (usuarioExistente) {
        return res.status(409).json({
            mensagem: "E-mail já cadastrado."
        });
    }

    // Cadastra usuário
    const { data, error } = await supabase
        .from("usuarios")
        .insert([
            {
                nome,
                sobrenome,
                email,
                data_de_nascimento,
                senha
            }
        ])
        .select(
            "id, nome, sobrenome, email, data_de_nascimento"
        )
        .single();

    if (error) {
        console.error("ERRO SUPABASE:", error);

        return res.status(500).json({
            mensagem: "Erro ao cadastrar usuário.",
            erro: error.message,
            detalhes: error.details,
            hint: error.hint
        });
    }

    res.status(201).json({
        mensagem: "Usuário cadastrado com sucesso!",
        usuario: data
    });
});

// =====================================================
// EXPORTAÇÃO PARA TESTES
// =====================================================

module.exports = app;

// =====================================================
// INICIAR SERVIDOR
// =====================================================

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
}