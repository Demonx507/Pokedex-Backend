import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Pokédex Backend funcionando");
});

app.get("/pokemon/:id", async (req, res) => {
    const{id} = req.params;
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
            return res.status(404).json({ error: "Pokémon no encontrado"});
        }
        const data = await response.json();
        res.json(data);
    }   catch (error) {
        res.status(500).json({ error: "Error al obtener Pokémon"});
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});