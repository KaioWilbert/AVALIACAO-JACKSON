// array armazena o usuario
const usuarios = []

// Definição da classe Usuario
class Usuario {
    // contrutor é chamado quando chamamos o usuario 
    constructor(id, nome, email, senha) {
        this.id = id;      
        this.nome = nome;  
        this.email = email; 
        this.senha = senha; 
    }

    //  salvar o usuário na lista de usuários
    save() {
        usuarios.push(this);  // adiciona o usuário ao array 'usuarios'
    }

    //retornar todos os usuários
    static fetchAll() {
        return usuarios;  // Retorna o array com todos os usuários
    }

    //encontra o usuario pelo id Atualizando
    static update(id, nome, email, senha) {
        const usuario = usuarios.find(p => p.id === id);  //  encontra o usuario chamado
        if (usuario) { 
            usuario.nome = nome;   
            usuario.email = email; 
            usuario.senha = senha; 
            return usuario;  
        }
        return null;  
    }

   
    static delete(id) {//encontra o usuario pelo id Deletando
        const index = usuarios.findIndex(p => p.id === id);  // encontra o usuario chamado 
        if (index !== -1) {  
            usuarios.splice(index, 1);  //remove o usuario no array 
            return true; 
        }
        return false; 
    }
}

module.exports = Usuario;
