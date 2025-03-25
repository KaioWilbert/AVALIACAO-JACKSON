const express = require('express');
const ProjetoController = require('./controllers/projetoController');
const UsuarioController = require('./controllers/usuarioController');
const TarefaController = require('./controllers/tarefaController');
const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
    res.send('Hello World!');
});

// Rota de usuários
app.post('/usuarios', UsuarioController.insert); // Cria
app.get('/usuarios', UsuarioController.findAll); // Lista
app.put('/usuarios/:idUsuario', UsuarioController.update); // Atualiza
app.delete('/usuarios/:idUsuario', UsuarioController.remove); // Remove

// Rota de projetos
app.post('/projetos', ProjetoController.insert); // Cria
app.get('/projetos', ProjetoController.findAll); // Lista
app.put('/projetos/:idProjeto', ProjetoController.update); // Atualiza
app.delete('/projetos/:idProjeto', ProjetoController.remove); // Remove

// Rota de tarefas
app.post('/tarefas', TarefaController.insert); // Cria
app.get('/tarefas', TarefaController.findAll); // Lista
app.put('/tarefas/:idTarefa', TarefaController.update); // Atualiza
app.delete('/tarefas/:idTarefa', TarefaController.remove); // Remove

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
