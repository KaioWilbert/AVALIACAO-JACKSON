const Tarefa = require('../models/tarefa');

class TarefaController {
    static insert(req, res) {
        const { titulo, idprojeto, idusuario } = req.body;

        // Validação dos dados
        if (!titulo || !idprojeto || !idusuario) {
            return res.status(400).json({ message: 'ambos são obrigatórios.' });
        }

        try {
            const tarefas = Tarefa.fetchAll();
            const id = tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1; // Garantir ID único
            const tarefa = new Tarefa(id, titulo, false, idprojeto, idusuario);
            tarefa.save();
            res.status(201).json(tarefa);
        } catch (error) {
            res.status(500).json({ message: 'erro ao criar tarefa.', error });
        }
    }

    static findAll(req, res) {
        try {
            const tarefas = Tarefa.fetchAll();
            res.json(tarefas);
        } catch (error) {
            res.status(500).json({ message: 'erro ao buscar tarefas.', error });
        }
    }

    static update(req, res) {
        const { id } = req.params;
        const { titulo, status } = req.body;

        // Validação dos dados
        if (!titulo || typeof status !== 'boolean') {
            return res.status(400).json({ message: 'Título é obrigatório e status deve ser obrigatorio.' });
        }

        try {
            const tarefaAtualizada = Tarefa.update(parseInt(id), titulo, status);
            if (tarefaAtualizada) {
                res.json(tarefaAtualizada);
            } else {
                res.status(404).json({ message: 'tarefa não encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'erro ao atualizar tarefa.', error });
        }
    }

    static remove(req, res) {
        const { id } = req.params;

        try {
            const tarefaDeletada = Tarefa.delete(parseInt(id));
            if (tarefaDeletada) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'tarefa não encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'erro no deletar tarefa.', error });
        }
    }
}

module.exports = TarefaController;
