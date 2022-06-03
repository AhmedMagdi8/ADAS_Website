const path = require('path');
require('dotenv').config();

const express = require('express');
const app = express();
const authMiddleware = require("./authMiddleware");


app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.set('view engine', 'ejs');
app.set("views", "views");
app.use(express.static(path.join(__dirname, 'public')));


const server = app.listen(3000, () => {
    console.log("Server is running");
});

require("./socket").init(server);

const getController = require('./controllers/getController');
const postController = require('./controllers/postController');

app.get('/', getController);
app.post('/', authMiddleware, postController);


