const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cocktail = require('./model/CocktailProduts')
const cocktailRoutes = require('./routes/cocktailRoutes')
const authRoutes = require('./routes/authRoutes')

const connectdb = require('./config/db')
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api", cocktailRoutes);
app.use("/api/auth", authRoutes);

connectdb();

app.get('/', (req, res) => {
    res.send("Server is working");
});

app.listen(port, () => {
    console.log(`Server is running`);
});
