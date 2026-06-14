import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
//import livro from "./models/Livro.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso!");
})

const app = express();
// app.use(express.json()); //middleware = utlizados para terem acessos as req e res e podem modificiar e alteracoes

routes(app); //app que foi definido como parametro no doc routes

// const livros = [ //array local (memoria)
//     {
//         id: 1,
//         titulo: "O Senhor dos Anéis"
//     },
//     {
//         id: 2,
//         titulo: "O Hobbit"
//     }
// ]

// function buscalivro(id) {
//     return livros.findIndex(livro => { 
//         return livro.id === Number(id);
//     })
// }

// app.get("/", (req, res) => { //GET = metodo para "pegar dados"
//     res.status(200).send("Curso de Node.js");
// });

//COMO TEM O CONTROLLER ESSE PEDACO DO CODIGO NÃO É MAIS NECESSÁRIO:

//****************************************************************************

//sempre que tiver await tem que ter o async
//.find é um metodo do mongoose

// app.get("/livros", async (req, res) => {
//     const listaLivros = await livro.find({});
//     res.status(200).json(listaLivros); //json e uma anotacao de objeto
// });

// app.get("/livros/:id", (req, res) => {
//     const index = buscalivro(req.params.id);
//     res.status(200).json(livros[index]);
// });

// app.post("/livros", (req, res) => {
//     livros.push(req.body); //req = objeto de "requisicao". responsabilidade do "express"
//     res.status(201).send("livro cadastrado com sucesso!"); //201 - cadastrado com sucesso
// });

// app.put("/livros/:id", (req, res) => {
//     const index = buscalivro(req.params.id);
//     livros[index].titulo = req.body.titulo;
//     res.status(200).json(livros);
// });

// app.delete("/livros/:id", (req, res) => {
//     const index = buscalivro(req.params.id);
//     livros.splice(index, 1);
//     res.status(200).send("livro removido com sucesso!");
// });

//****************************************************************************


//CRUD: Create (Criar (Post)), Read(Ler (Get)), Update (Atualizar (Put)), Delete (Exluir (Delete)).
export default app;

//mongodb+srv://admin:<db_password>@cluster0.hrpzqcf.mongodb.net/?appName=Cluster0