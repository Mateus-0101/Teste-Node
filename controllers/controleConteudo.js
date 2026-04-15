const Conteudo = require('../models/conteudo'); // Dois pontos é um nível acima
// Controladores das páginas

const conteudo_index = (req, res) => {
    Conteudo.find().sort( { createdAt: -1 })
        .then((resultado) => {
            res.render('paginas/index', { titulo: 'Conteúdo Completo', conteudo: resultado})
        })
        .catch((err) => {
            console.log(err);
        });
};

const conteudo_detalhes = (req, res) => {
    const id = req.params.id;   // Atribui o atributo a uma variável

    Conteudo.findById(id)
        .then(resultado => {
            res.render('paginas/detalhes', { conteudo: resultado, titulo: 'Detalhes do Cnteúdo'});
        })
        .catch(err => {
            res.status(404).render('./404', { titulo: 'Erro 404'});
        });
};

const conteudo_criar = (req, res) => {
    res.render('paginas/criar',{ titulo: 'Criar Conteúdo'});
};

const conteudo_enviar = (req, res) => {
    const conteudo = new Conteudo(req.body); // Enviado objeto "conteudo" para banco de dados

    conteudo.save()
        .then((resultado) => {
            res.redirect('/conteudo');
        })
        .catch((err) => {
            console.log(err);
        })
};

const conteudo_delete = (req, res) => {
    const id = req.params.id;

    Conteudo.findByIdAndDelete(id)
        .then(resultado => {
            res.json({ redirect: '/conteudo' });
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports =  {
    conteudo_index,
    conteudo_detalhes,
    conteudo_criar,
    conteudo_enviar,
    conteudo_delete
};