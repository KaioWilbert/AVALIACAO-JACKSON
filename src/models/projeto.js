//array armazena o usuario
const projetos = []

//Definição da classe Usuario
class Projeto {
    // contrutor é chamado quando chamamos a lista 
    constructor(id,nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        
    }


    save() {///  salvar a lista na lista de usuários
        projetos.push(this);// adiciona alista ao array 'usuarios'
    }


    static fetchAll() {//retornar todos os listas
        return projetos; // Retorna o array com todos os listas
    }
    

    static update(id, nome, descricao) {  //encontra a lista pelo id Atualizando
        const projeto = projetos.find(p => p.id === id);  //  encontra a lista chamado
        if (projeto) {  
            projeto.nome = nome;
            projeto.descricao = descricao;
            return projeto;  
        }  
        return null;  
    }  

    
    static delete(id) { //encontra a lista pelo id Deletando
        const index = projetos.findIndex(p => p.id === id);   // encontra a lista chamado 
        if (index !== -1) {  
            projetos.splice(index, 1);  //remove a lista no array 
            return true;  
        }  
        return false;  
    }  
}

module.exports = Projeto;