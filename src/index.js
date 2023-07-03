require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'temp', 'uploads')));

app.use(require('./controllers/user.controller'));
app.use(require('./controllers/alergia.controller'));
app.use(require('./controllers/arquivo.controller'));
app.use(require('./controllers/cirurgia.controller'));
app.use(require('./controllers/comorbidade.controller'));
app.use(require('./controllers/estabelecimento.controller'));
app.use(require('./controllers/exame.controller'));
app.use(require('./controllers/item.controller'));
app.use(require('./controllers/procedimento.controller'));
app.use(require('./controllers/receita.controller'));
app.use(require('./controllers/tratamento.controller'));

app.listen(process.env.PORT || 8080);