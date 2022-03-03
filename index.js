var app = require('./app')

var port = 8000

app.listen(port, () => {
    console.log(`node is running on port: ${port}`)
})