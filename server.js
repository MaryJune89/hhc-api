const express = require('express')
const app = express()
const PORT = 7000

const agencies = {

    'provider1': {
        'proName': 'Absolute Home Care',
        'location': '2801 Clark Ave Cleveland, OH 44109',
        'phone': '216-555-5555'
    },

    'provider2': {
        'proName': 'Just Like Family',
        'location': '4432 Pearl Rd. Cleveland,OH 44109',
        'phone': '216-555-5555'
    },

    'provider3': {
        'proName': 'Endless Quality Homecare',
        'location': '707 Brookpark Rd. Cleveland, OH 44109',
        'phone': '216-555-5555'
    },

    'unknown': {
        'proName': 'unknown',
        'location': 'unknown',
        'phone': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}, better go catch it!`)
})

app.get('/api/:name', (request, response) => {
    const agencyName = request.params.name.toLowerCase()
    if (agencies[agencyName]) {
        response.json(agencies[agencyName])
    } else {
        response.json(agencies['unknown'])
    }
})