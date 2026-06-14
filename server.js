//Importe o modulo http.
// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

//Defina uma constante PORT com o valor 3000.
const PORT = 3000;

//rotas 
// const rotas = {
//     "/": "Curso de Express API",
//     "/livros": "Entrei na rota livros",
//     "/autores": "Entrei na rota autores"
// };

//Crie um servidor HTTP utilizando a funcao createServer.
//Dentro da funcao de callback de createServer, defina as variaveis req e res.
// const server = http.createServer((req, res) => {
//     //Escreva o cabecalho da resposta utilizando o metodo writeHead de res. O status deve ser 200 e o tipo de conteudo deve ser text/plain.
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     //Termine a resposta utilizando o metodo end de res. O conteudo deve ser "Curso de Node.js".
//     res.end(rotas[req.url]); //a notacao de colchetes esta servindo para passarmos uma variavel como propriedade dentro do objeto "rotas"
// });
//req e um dos argumentos recebidos pela funcao createServer(). Ou seja, toda vez que uma requisicao e recebida, ela traz consigo, entre varias outras informacoes, uma propriedade chamada url.
//url e uma propriedade do "req"

//Termine a resposta utilizando o metodo end de res. O conteudo deve ser "Curso de Node.js".
app.listen(PORT, () => {
    console.log("servidor escutando!");
});