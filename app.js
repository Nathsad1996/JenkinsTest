const express = require('express')

app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/number', async (req, res) => {
    let number = parseInt(0 + Math.random() * 100)

    res.status(200).json({
        "number": number
    })
})

/**
 * body: json object with number and multiplier params
 */
app.post('/multiply', async (req, res) => {
    let body = req.body
    let output = body.number * body.multiplier

    res.status(200).json({
        "result": output
    })
})


app.listen(5000, () => {
    console.log(`server listen at http://localhost:5000`)
})

// properly close the app when closing signal received
gracefulShutdown = () => {
    console.log("I'm Shutting down")
}

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon