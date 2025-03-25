const Usuario = require('../models/usuario');

class usuarioController {
    static insert(req, res) {
        const { nome, email, senha } = req.body;

    
        if (!nome || !email || !senha) {
            return res.status(400).json({ message: 'ambos são obrigatórios.' });
        }

        try {
            const usuarios = Usuario.fetchAll();
            const id = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1; 
            const usuario = new Usuario(id, nome, email, senha);
            usuario.save();
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ message: 'erro ao criar usuário.', error });
        }
    }

    static findAll(req, res) {
        try {
            const usuarios = Usuario.fetchAll();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ message: 'erro ao buscar usuários.', error });
        }
    }

    static update(req, res) {
        const { id } = req.params;
        const { nome, email, senha } = req.body;

        // Validação básica dos dados
        if (!nome || !email || !senha) {
            return res.status(400).json({ message: 'ambos são obrigatórios.' });
        }

        try {
            const usuarioAtualizado = Usuario.update(parseInt(id), nome, email, senha);
            if (usuarioAtualizado) {
                res.json(usuarioAtualizado);
            } else {
                res.status(404).json({ message: 'usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'erro na hora atualizar usuário.', error });
        }
    }

    static remove(req, res) {
        const { id } = req.params;

        try {
            const usuarioDeletado = Usuario.delete(parseInt(id));
            if (usuarioDeletado) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'erro no deletar usuário.', error });
        }
    }
}

module.exports = usuarioController;
