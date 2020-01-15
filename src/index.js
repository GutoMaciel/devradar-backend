const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@aircnc-adomk.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Metodos HTTP: GET, POST, PUT, DELETE

// Tupos de parametros:
// QUERY PARAMS: request.query (Filtros, ordenacao, paginacao)
// ROUTE PARAMS: request.params (identificar um recurso na requisicao ou remocao) Quando falamos de um unico identificador (delete user/4)
// BODY: Request.body (dados para criacao ou alteracao) Usado principalmente por meio do POST E PUT. Usamos para editar ou criar/store alguma coisa. 

// Mongo DB (Nao relacional)

app.listen(3333);