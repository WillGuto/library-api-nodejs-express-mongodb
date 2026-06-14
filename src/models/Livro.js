import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

//schema: é um objeto de configuração que define a estrutura e as propriedades de um documento.
//o mongoose define a estrutura e quais serao as propriedades de qualquer documento.

//{} --> objeto
//modelo: é um objeto que representa uma colecao na base de dados
//o modelo em si e um interface que interage com a API.

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectID },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema
}, { versionKey: false }); //versionalidade do mongoDB

const livro = mongoose.model("livros", livroSchema);

export default livro;