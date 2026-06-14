import { autor } from "../models/Autor.js";

class AutorController {

    //GET TODOS
    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({ message: '${erro.message} - falha na requisição' });
        }
    }

    //GET POR ID
    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: '${erro.message} - falha na requisição do autor' });
        }
    }

    //POST
    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com Sucesso!", autor: novoAutor });

        } catch (erro) {
            res.status(500).json({ message: '${erro.message} - falha ao cadastrar autor' });
        }
    }

    //PUT
    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado!" });
        } catch (erro) {
            res.status(500).json({ message: '${erro.message} - falha na atualização do autor' });
        }
    }

    //DELETE
    static async excluirAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Autor excluído!" });
        } catch (erro) {
            res.status(500).json({ message: '${erro.message} - falha na exclusão' });
        }
    }

};

export default AutorController;