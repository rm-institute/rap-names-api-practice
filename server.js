const express = require("express")
const app = express()
const PORT = 8080

const rappers = {
    "21 savage": {
        "age": 29,
        "birthName": "Sheya Bin Abraham-Joseph",
        "birthLocation": "London, UK"
    },
    "chance the rapper": {
        "age": 29,
        "birthName": "Chancelor Bennett",
        "birthLocation": "Chicago, Illinois"
    },
    "j-poond": {
        "age": 35,
        "birthName": "John Wilks",
        "birthLocation": "Slough, UK"
    }
}

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get("/api/:name", (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    }else {
        response.json(rappers["j-poond"])
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})