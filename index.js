require("dotenv").config(); //para levantar variables de entorno

const express = require("express");
const app = express();

//creo ruta basica
app.get("/", (req, res) => {
    res.send("Aguante River!!")
})


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
