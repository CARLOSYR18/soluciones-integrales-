const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// Conexion MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Verificar conexión
db.connect((err) => {
  if (err) {
    console.error("Error al conectar a MySQL:", err);
    return;
  }
  console.log("Conexión MySQL exitosa 🎉");
});

// Ruta principal
app.get("/", (req, res) => {
  res.send("Backend funcionando correctamente 🚀");
});

// 👉 Ruta para obtener la tabla productos
app.get("/productos", (req, res) => {
  const query = "SELECT * FROM products";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error al obtener productos:", err);
      return res.status(500).json({ error: "Error al obtener productos" });
    }

    res.json(results);
  });
});

// Iniciar servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);

});