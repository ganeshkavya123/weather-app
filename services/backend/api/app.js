require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
// const knex = require('../../config/knex')
const swaggerUi = require('swagger-ui-express');
const HomeRouter = require('./home.router')
const docs = require('./../docs')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs, {}));

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true ,limit: '50mb'}));

// const corsOptions = {
//     origin: process.env.CLIENT_URL,
//   };

app.use(cors());

app.use("/api", HomeRouter);

app.listen(process.env.PORT, () => {
    console.log("Server up and running on port : ", process.env.PORT);
  });