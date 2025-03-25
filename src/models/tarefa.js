class Tarefa {
    constructor(idTarefa, titulo, status, idProjeto, idUsuario) {
        this.idTarefa = idTarefa;
        this.titulo = titulo;
        this.status = status;
        this.idProjeto = idProjeto;
        this.idUsuario = idUsuario;
    }

    static save(tarefa) {//salva
        Tarefa.tarefas.push(tarefa);
    }

    static fetchAll() {
        return Tarefa.tarefas;
    }

    static fetchOne(idTarefa) {
        return Tarefa.tarefas.find(t => t.idTarefa === idTarefa);
    }

    static update(idTarefa, dadosAtualizados) {//atualizar
        const tarefa = Tarefa.fetchOne(idTarefa);
        if (tarefa) {
            Object.assign(tarefa, dadosAtualizados);
            return tarefa;
        }
        return null;
    }

    static remove(idTarefa) {//remove
        const index = Tarefa.tarefas.findIndex(t => t.idTarefa === idTarefa);
        if (index !== -1) {
            Tarefa.tarefas.splice(index, 1);
            return true;
        }
        return false;
    }

    static generateId() {
        const maxId = Tarefa.tarefas.reduce((max, tarefa) => Math.max(max, tarefa.idTarefa), 0);
        return maxId + 1;
    }
}

module.exports = Tarefa;
