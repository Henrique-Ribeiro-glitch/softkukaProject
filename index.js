const api = require("./api");
const express = require('express');
const server = express();

server.use(express.json());
server.listen(3000);

server.get("/", (request, response) => {
    return response.send({ message: "Welcome and may the force be with you" });
});

server.get("/swapi1", async (request, response) => {
    try {
        const { data } = await api.get("people/1/");
        
        return response.send({ data })
    } catch (error) {
        response.send({ error: error.massage });
    }
});

server.get("/swapi2", async (request, response) => {
    try {
        const { data } = await api.get("planets/3/");
        
        return response.send({ data })
    } catch (error) {
        response.send({ error: error.massage });
    }
});

server.get("/swapi3", async (request, response) => {
    try {
        const { data } = await api.get("starships/9/");
        
        return response.send({ data })
    } catch (error) {
        response.send({ error: error.massage });
    }
});