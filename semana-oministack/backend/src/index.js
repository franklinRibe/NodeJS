//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
// Query Params: (90% com GET)
    // acesso com: request.query(filtros, ordenação, paginação...) 

// Route Params: (90% com PUT e DELETE)
    // acesso com: request.params(identificar um recurso na alteração ou remoção)

// Body: (90% com POST e PUT)
    // acesso com: request.body(Dados para criação ou alteração  de um registro)

// MongoDB

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://nodejs-admin:ChaP0311@cluster0-zxd2v.mongodb.net/NodeJs?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  
})
app.use(express.json());
app.use(routes);
app.listen(8081);
