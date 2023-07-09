require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

//const db = require('./models');

const User = require("./models/user.model");
const Procedimento = require("./models/procedimento.model");
const Cirurgia = require("./models/cirurgia.model");
const Exame = require("./models/exame.model");
const Tratamento = require("./models/tratamento.model");
const Receita = require("./models/receita.model");
const Item = require("./models/item.model");
const Arquivo = require("./models/arquivo.model");
const Comorbidade = require("./models/comorbidade.model");
const Alergia = require("./models/alergia.model");
const Estabelecimento = require("./models/estabelecimento.model");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "temp", "uploads"))
);

(async () => {
  await User.sync({ alter: true });
  await Arquivo.sync({ alter: true });
  await Cirurgia.sync({ alter: true });
  await Exame.sync({ alter: true });
  await Procedimento.sync({ alter: true });
  await Tratamento.sync({ alter: true });
  await Receita.sync({ alter: true });
  await Item.sync({ alter: true });
  await Comorbidade.sync({ alter: true });
  await Alergia.sync({ alter: true });
  await Estabelecimento.sync({ alter: true });
})();

app.use(require("./controllers/user.controller"));
app.use(require("./controllers/alergia.controller"));
app.use(require("./controllers/arquivo.controller"));
app.use(require("./controllers/cirurgia.controller"));
app.use(require("./controllers/comorbidade.controller"));
app.use(require("./controllers/estabelecimento.controller"));
app.use(require("./controllers/exame.controller"));
app.use(require("./controllers/item.controller"));
app.use(require("./controllers/procedimento.controller"));
app.use(require("./controllers/receita.controller"));
app.use(require("./controllers/tratamento.controller"));

require('./routes/user.routes')(app);
require('./routes/alergia.routes')(app);
require('./routes/arquivo.routes')(app);
require('./routes/cirurgia.routes')(app);
require('./routes/comorbidade.routes')(app);
require('./routes/estabelecimento.routes')(app);
require('./routes/exame.routes')(app);
require('./routes/item.routes')(app);
require('./routes/procedimento.routes')(app);
require('./routes/receita.routes')(app);
require('./routes/tratamento.routes')(app);

app.listen(process.env.PORT || 8080);
