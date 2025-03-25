const Projeto = require('../models/projeto');  


class ProjetoController {   
    static insert(req, res) {  
        const { nome, descricao } = req.body;  
        const id = Projeto.fetchAll().length + 1;
        const projeto = new Projeto(id, nome, descricao);  


        projeto.save();  //Salva
        res.status(201).json(projeto);  
    }  


    static findAll(req, res) {  //Lista
        const projetos = Projeto.fetchAll();  
        res.json(projetos);  
    }  


    static update(req, res) { //Atualiza
        const { id } = req.params;  
        const { nome, descricao } = req.body;  
        const projetoAtualizado = Projeto.update(parseInt(id), nome, descricao);  
        if (projetoAtualizado) {  
            res.json(projetoAtualizado);  
        } else {  
            res.status(404).json({ message: 'Este prjeto não encontramos' });  
        }  
    }  


    static remove(req, res) { //remove
        const { id } = req.params;  
        const projetoDeletado = Projeto.delete(parseInt(id));  
        if (projetoDeletado) {  
            res.status(204).send(); 
        } else {  
            res.status(404).json({ message: 'Este prjeto não encontramos' });  
        }  
    }  
}  

module.exports = ProjetoController;  