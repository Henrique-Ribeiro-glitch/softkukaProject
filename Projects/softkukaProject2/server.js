const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')

app.use(cors())

app.get('/', (request, response) => {
    return response.json({ message:'May the force be with you' })
})

app.get('/swapi1', async(request, response) => {
    try {
        const { data } = await axios('https://swapi.dev/api/people/1/')
        return response.json(data)
    } catch (error) {
        console.error(error)
    }
})

app.get('/swapi2', async(request, response) => {
    try {
        const { data } = await axios('https://swapi.dev/api/starships/9/')
        return response.json(data)
    } catch (error) {
        console.error(error)
    }

})

app.listen('4000')