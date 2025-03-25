const Projeto = require('../models/projeto');

class ProjetoController {
    static insert(req, res) {
        const { nome, descricao } = req.body;

        if (!nome || !descricao) {
            return res.status(400).json({ message: 'ambos são obrigatórios.' });
        }

        try {
            const projetos = Projeto.fetchAll();
            const id = projetos.length > 0 ? projetos[projetos.length - 1].id + 1 : 1; 
            const projeto = new Projeto(id, nome, descricao);
            projeto.save();
            res.status(201).json(projeto);
        } catch (error) {
            res.status(500).json({ message: 'erro ao criar projeto.', error });
        }
    }

    static findAll(req, res) {
        try {
            const projetos = Projeto.fetchAll();
            res.json(projetos);
        } catch (error) {
            res.status(500).json({ message: 'erro ao buscar projetos.', error });
        }
    }

    static update(req, res) {
        const { id } = req.params;
        const { nome, descricao } = req.body;

        if (!nome || !descricao) {
            return res.status(400).json({ message: 'ambos são obrigatórios.' });
        }

        try {
            const projetoAtualizado = Projeto.update(parseInt(id), nome, descricao);
            if (projetoAtualizado) {
                res.json(projetoAtualizado);
            } else {
                res.status(404).json({ message: 'projeto não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'erro ao atualizar projeto.', error });
        }
    }

    static remove(req, res) {
        const { id } = req.params;

        try {
            const projetoDeletado = Projeto.delete(parseInt(id));
            if (projetoDeletado) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'projeto não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'erro ao deletar projeto.', error });
        }
    }
}

module.exports = ProjetoController;
