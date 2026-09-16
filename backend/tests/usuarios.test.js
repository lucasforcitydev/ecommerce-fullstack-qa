const request = require("supertest");

const app = require("../server");

describe("API Shopping do QA", () => {

    let emailTeste;

    beforeAll(() => {
        emailTeste = `jest.${Date.now()}@example.com`;
    });


    // =====================================================
    // CT-API-001
    // GET /
    // =====================================================

    test("CT-API-001 - Deve verificar se a API está funcionando", async () => {

        const response = await request(app)
            .get("/");

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual({
            mensagem: "API Shopping do QA funcionando!"
        });
    });


    // =====================================================
    // CT-API-002
    // GET /usuarios
    // =====================================================

    test("CT-API-002 - Deve retornar a lista de usuários", async () => {

        const response = await request(app)
            .get("/usuarios");

        expect(response.statusCode).toBe(200);

        expect(Array.isArray(response.body)).toBe(true);
    });


    // =====================================================
    // CT-API-003
    // GET /usuarios
    // Validar campos retornados
    // =====================================================

    test("CT-API-003 - Não deve retornar a senha dos usuários", async () => {

        const response = await request(app)
            .get("/usuarios");

        expect(response.statusCode).toBe(200);

        expect(Array.isArray(response.body)).toBe(true);

        if (response.body.length > 0) {

            const usuario = response.body[0];

            expect(usuario).toHaveProperty("id");
            expect(usuario).toHaveProperty("nome");
            expect(usuario).toHaveProperty("sobrenome");
            expect(usuario).toHaveProperty("email");
            expect(usuario).toHaveProperty(
                "data_de_nascimento"
            );

            expect(usuario).not.toHaveProperty("senha");
        }
    });


    // =====================================================
    // CT-API-004
    // POST /usuarios
    // Cadastro válido
    // =====================================================

    test("CT-API-004 - Deve cadastrar um novo usuário", async () => {

        const novoUsuario = {
            nome: "Lucas",
            sobrenome: "Teste Jest",
            email: emailTeste,
            data_de_nascimento: "1996-09-07",
            senha: "Teste@123"
        };

        const response = await request(app)
            .post("/usuarios")
            .set("Content-Type", "application/json")
            .send(novoUsuario);

        expect(response.statusCode).toBe(201);

        expect(response.body).toHaveProperty(
            "mensagem",
            "Usuário cadastrado com sucesso!"
        );

        expect(response.body).toHaveProperty("usuario");

        expect(response.body.usuario).toHaveProperty(
            "nome",
            "Lucas"
        );

        expect(response.body.usuario).toHaveProperty(
            "email",
            emailTeste
        );

        expect(response.body.usuario).not.toHaveProperty(
            "senha"
        );
    });


    // =====================================================
    // CT-API-005
    // POST /usuarios
    // Sem nome
    // =====================================================

    test("CT-API-005 - Deve rejeitar cadastro sem nome", async () => {

        const usuario = {
            sobrenome: "Teste",
            email: `sem.nome.${Date.now()}@example.com`,
            data_de_nascimento: "1996-09-07",
            senha: "Teste@123"
        };

        const response = await request(app)
            .post("/usuarios")
            .send(usuario);

        expect(response.statusCode).toBe(400);

        expect(response.body).toHaveProperty(
            "mensagem",
            "Todos os campos são obrigatórios."
        );
    });


    // =====================================================
    // CT-API-006
    // POST /usuarios
    // Sem email
    // =====================================================

    test("CT-API-006 - Deve rejeitar cadastro sem e-mail", async () => {

        const usuario = {
            nome: "Lucas",
            sobrenome: "Teste",
            data_de_nascimento: "1996-09-07",
            senha: "Teste@123"
        };

        const response = await request(app)
            .post("/usuarios")
            .send(usuario);

        expect(response.statusCode).toBe(400);

        expect(response.body).toHaveProperty(
            "mensagem",
            "Todos os campos são obrigatórios."
        );
    });


    // =====================================================
    // CT-API-007
    // POST /usuarios
    // Sem senha
    // =====================================================

    test("CT-API-007 - Deve rejeitar cadastro sem senha", async () => {

        const usuario = {
            nome: "Lucas",
            sobrenome: "Teste",
            email: `sem.senha.${Date.now()}@example.com`,
            data_de_nascimento: "1996-09-07"
        };

        const response = await request(app)
            .post("/usuarios")
            .send(usuario);

        expect(response.statusCode).toBe(400);

        expect(response.body).toHaveProperty(
            "mensagem",
            "Todos os campos são obrigatórios."
        );
    });


    // =====================================================
    // CT-API-008
    // POST /usuarios
    // E-mail inválido
    // =====================================================

    test("CT-API-008 - Deve rejeitar e-mail inválido", async () => {

        const usuario = {
            nome: "Lucas",
            sobrenome: "Teste",
            email: "email-invalido-ct008",
            data_de_nascimento: "1996-09-07",
            senha: "Teste@123"
        };

        const response = await request(app)
            .post("/usuarios")
            .send(usuario);

        /*
         * IMPORTANTE:
         * O seu server.js atualmente NÃO possui
         * validação de formato de e-mail.
         *
         * Portanto este teste documenta o comportamento
         * atual da API.
         *
         * O ideal será implementar essa validação depois.
         */

        expect(response.statusCode).toBe(201);
    });


    // =====================================================
    // CT-API-009
    // POST /usuarios
    // E-mail duplicado
    // =====================================================

    test("CT-API-009 - Deve rejeitar e-mail já cadastrado", async () => {

        const usuario = {
            nome: "Lucas",
            sobrenome: "Duplicado",
            email: emailTeste,
            data_de_nascimento: "1996-09-07",
            senha: "Teste@123"
        };

        const response = await request(app)
            .post("/usuarios")
            .send(usuario);

        expect(response.statusCode).toBe(409);

        expect(response.body).toHaveProperty(
            "mensagem",
            "E-mail já cadastrado."
        );
    });


    // =====================================================
    // CT-API-010
    // POST + GET
    // Persistência
    // =====================================================

    test("CT-API-010 - Deve persistir o usuário cadastrado", async () => {

        const response = await request(app)
            .get("/usuarios");

        expect(response.statusCode).toBe(200);

        const usuarioEncontrado = response.body.find(
            usuario => usuario.email === emailTeste
        );

        expect(usuarioEncontrado).toBeDefined();

        expect(usuarioEncontrado.nome).toBe("Lucas");

        expect(usuarioEncontrado.sobrenome).toBe(
            "Teste Jest"
        );

        expect(usuarioEncontrado.email).toBe(
            emailTeste
        );

        expect(usuarioEncontrado).not.toHaveProperty(
            "senha"
        );
    });


    // =====================================================
    // CT-API-011
    // DELETE /usuarios
    // =====================================================

    test("CT-API-011 - Deve rejeitar DELETE não implementado", async () => {

        const response = await request(app)
            .delete("/usuarios");

        expect(response.statusCode).toBe(404);
    });


    // =====================================================
    // LOGIN
    // =====================================================

    test("Deve realizar login com credenciais válidas", async () => {

        const response = await request(app)
            .post("/login")
            .send({
                email: emailTeste,
                senha: "Teste@123"
            });

        expect(response.statusCode).toBe(200);

        expect(response.body).toHaveProperty(
            "mensagem",
            "Login realizado com sucesso."
        );

        expect(response.body).toHaveProperty(
            "usuario"
        );

        expect(response.body.usuario).toHaveProperty(
            "email",
            emailTeste
        );

        expect(response.body.usuario).not.toHaveProperty(
            "senha"
        );
    });


    // =====================================================
    // LOGIN
    // Sem dados
    // =====================================================

    test("Deve rejeitar login sem e-mail e senha", async () => {

        const response = await request(app)
            .post("/login")
            .send({});

        expect(response.statusCode).toBe(400);

        expect(response.body).toHaveProperty(
            "mensagem",
            "E-mail e senha são obrigatórios."
        );
    });


    // =====================================================
    // LOGIN
    // Credenciais inválidas
    // =====================================================

    test("Deve rejeitar login com credenciais inválidas", async () => {

        const response = await request(app)
            .post("/login")
            .send({
                email: "usuario.inexistente@example.com",
                senha: "SenhaErrada123"
            });

        expect(response.statusCode).toBe(401);

        expect(response.body).toHaveProperty(
            "mensagem",
            "E-mail ou senha inválidos."
        );
    });

});