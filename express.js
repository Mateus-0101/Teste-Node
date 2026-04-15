const express = require ('express');

// Definindo instância de express
const app = express();

// Receber pedidos
app.listen(3000);

// Método GET
// '/' para raíz do site
app.get('/', (req,res) => {
    //res.send('<p>Página Inicial</p>'); Modo manual de escrever HTML
    res.sendFile('./views/index.html', { root: __dirname}); // Pegar arquivo, definindo a partir de onde
});

// Página Sobre
app.get('/sobre', (req,res) => {
    res.sendFile('./views/sobre.html', { root: __dirname});
});

// Redirecionamento
app.get('/sobre-nos', (req,res) => {
    res.redirect('/sobre');
});

// Página 404
// Chamado quando pedido não é respondido por nenhum acima
// Sempre o ÚLTIMO
app.use((req, res) => {
    // Adicionando o código de erro
    res.status(404).sendFile('./views/404.html', { root: __dirname});
});