const express = require ('express');
const morgan = require ('morgan');
const mongoose = require('mongoose'); // Biblioteca para facilitar administração do MongoDB
const rotasConteudo = require('./rotas/rotasConteudo');

// Conectar para MongoDB
const dbURI = 'mongodb+srv://teste:kZL5s07hXtZ8SpYs@cluster0.j3iiwvj.mongodb.net/conteudos?appName=Cluster0'
mongoose.connect(dbURI)            // Método assíncrono -> then e catch
    .then(() => app.listen(3000))  // Servidor só recebe requerimentos se a conexão for bem suceida
    .catch((err) => console.log(err));

// Definindo instância de express
const app = express();

// Registrar view engines
app.set('view engine', 'ejs');

// Midlleware que transforma código ejs para objeto do app.post
app.use(express.urlencoded({ extended: true }));

// Middleware e arquivos estáticos
app.use(express.static('public'));

// Criando Middleware
app.use(morgan('dev'));

// ----------------------------------------------Rotas-------------------------------------------

app.get('/', (req,res) => {
    res.redirect('/conteudo');
});

app.use('/conteudo', rotasConteudo);

// Página Sobre
app.get('/sobre', (req,res) => {
    res.render('sobre',{ titulo: 'Sobre Nós'});
});

// Redirecionamento
app.get('/sobre-nos', (req,res) => {
    res.redirect('/sobre');
});

// Página 404
// Chamado quando pedido não é respondido por nenhum acima
// Sempre o ÚLTIMO
/* app.use((req, res) => {
    // Adicionando o código de erro
    res.status(404).render('404', { titulo: 'Erro 404'});
}); */