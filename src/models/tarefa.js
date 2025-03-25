// array armazena o tarefa
const tarefas = []
// Definição da classe Usuario
class Tarefa {
     // contrutor é chamado quando chamamos o tarefa 
    constructor(id,titulo, status, idProjeto, idUsuario) {
        this.id = id;
        this.titulo = titulo;
        this.status = status | false;
        this.idProjeto = idProjeto;
        this.idUsuario = idUsuario;
    }

    
    save() {//  salvar o tarefa na lista de usuários
        tarefas.push(this);// adiciona o tarefa ao array 'tarefa'
    }


    static fetchAll() {//retornar todos as tarefa
        return tarefas; // Retorna o array com todos as tera
    }


    static update(id, titulo, status, idProjeto, idUsuario) {//encontra o tarefa pelo id Atualizando
        const tarefa = tarefas.find(p => p.id === id);  //  encontra a tarefa chamado
        if (tarefa) {  
            tarefa.titulo = titulo;
            tarefa.status = status;
            tarefa.idProjeto = idProjeto;
            tarefa.idUsuario = idUsuario;
            return tarefa;  
        }  
        return null;  
    }  


    static delete(id) {//encontra o tarefa pelo id Deletando
        const index = tarefas.findIndex(p => p.id === id);  // encontra a tarefa chamado 
        if (index !== -1) {  
            tarefas.splice(index, 1);   //remove a tarefa no array 
            return true;  
        }  
        return false;  
    }  
}

module.exports = Tarefa;