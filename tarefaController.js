const Tarefa = require('../models/tarefa');  


class tarefaController {  
    static insert(req, res) {  
        const { Titulo, idProjeto, idUsuario } = req.body;  
        const id = Tarefa.fetchAll().length + 1;  
        const tarefa = new Tarefa(id, Titulo, false, idProjeto, idUsuario); 


        tarefa.save();  //Salva
        res.status(201).json(tarefa);  
    }  

    static findAll(req, res) { //Lista
        const tarefa = Tarefa.fetchAll();  
        res.json(tarefa);  
    }  
 
    static update(req, res) {  //Atualiza
        const { id } = req.params;  
        const { titulo, status } = req.body;  
        const tarefaAtualizada = Tarefa.update(parseInt(id), titulo, status);  
        if (tarefaAtualizada) {  
            res.json(tarefaAtualizada);  
        } else {  
            res.status(404).json({ message: 'não escontramos esta tarefa' });  
        }  
    }  

    static remove(req, res) { //Remove
        const { id } = req.params;  
        const tarefaDeletada = Tarefa.delete(parseInt(id));  
        if (tarefaDeletada) {  
            res.status(204).send(); 
        } else {  
            res.status(404).json({ message: 'não escontramos esta tarefa' });  
        }  
    }  
}  

module.exports = tarefaController;  