// Necessário protocolo HTTP
const http = require('http');

// Necessário para ler arquivos html
const fs = require('fs');

// Testando pacote local
// Comando "npm install" instala todas as depedencias necessárias
// listadas no arquivo "package.json"
const _  = require('lodash');

// Cria servidor com objetos request e response
const servidor = http.createServer((req, res) => {
    // Pedido do cliente
    //console.log(req.url, req.method);

    /*lodash:
    const num = _.random(0, 20);
    console.log(num);

    const saudacao = _.once(() => {
        console.log('Bem-vindo!');
    });

    saudacao();
    saudacao();
    */
    // Resposta do servidor
    // Definir tipo de coneúdo do cabeçalho
    res.setHeader('Content-Type', 'text/html');

    // Definindo as respostas de URL
    let caminho = './view/'; // Definindo o caminho inicial

    // Casos de escolha para a url
    // Cada caso adiciona a parte no caminho inicial, na url
    switch(req.url) {
        case '/':
            caminho += 'index.html';
            res.statusCode = 200; // Código de sucesso
            break;
        case '/sobre':
            caminho += 'sobre.html';
            res.statusCode = 200;
            break;
        case '/sobre-eu': // Redirecionamento
            res.statusCode = 301; // Código de redirecionamento
            res.setHeader('Location', '/sobre');
            res.end();
            break;
        default:
            caminho += '404.html';
            res.statusCode = 404; // Código de erro na parte de cliente
            break;
    }

    // Enviar arquivo html para cliente
    fs.readFile(caminho, (err, data) => {
        if(err){
            console.log(err);
            res.end
        } else {
            //res.write(data);
            res.end(data);
        }
    });
    
});

// Servidor recebendo pedidos, através da porta 3000 chamada localhost
servidor.listen(3000, 'localhost', () => {
    console.log('Esperando pedidos na porta 3000');
});