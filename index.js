const api = require("./api");
const express = require('express');
const server = express();

server.use(express.json());
server.listen(3000);

server.get("/", (request, response) => {
    return response.send({ message: "Welcome and may the force be with you" });
});

server.get("/people", async (request, response) => {
    try {
        const { data } = await api.get("people/");
        
        return response.send({ data })
    } catch (error) {
        response.send({ error: error.message });
    }
});

server.get("/planets/:id", async (request, response) => {
    const { id } = request.params;
    try {
        const { data } = await api.get(`planets/${id}`);
        
        return response.send({ data })
    } catch (error) {
        response.send({ error: error.message });
    }
});

server.get("/starships/:id", async (request, response) => {
    const { id } = request.params;
    try {
        const { data } = await api.get(`starships/${id}`);
        
        return response.send({ data })
    } catch (error) {
        response.send({ error: error.message });
    }
});
