const tarefas = [];

class Tarefa {
    constructor(id, titulo, status = false, idprojeto, idusuario) {
        this.id = id;
        this.titulo = titulo;
        this.status = status;
        this.idprojeto = idprojeto;
        this.idusuario = idusuario;
    }

    save() {//salva
        tarefas.push(this);
    }

    static fetchAll() {
        return tarefas;
    }

    static update(id, titulo, status, idprojeto, idusuario) {//atualizar
        const tarefa = tarefas.find(p => p.id === id);
        if (tarefa) {
            if (titulo) tarefa.titulo = titulo;
            if (status !== undefined) tarefa.status = status;
            if (idprojeto) tarefa.idprojeto = idprojeto;
            if (idusuario) tarefa.idusuario = idusuario;
            return tarefa;
        }
        return null;
    }

    static delete(id) {//deleta
        const index = tarefas.findIndex(p => p.id === id);
        if (index !== -1) {
            tarefas.splice(index, 1);
            return true;
        }
        return false;
    }

    static generateId() {
        const maxId = tarefas.reduce((max, tarefa) => Math.max(max, tarefa.id), 0);
        return maxId + 1;
    }
}

module.exports = Tarefa;
