var fs = require('fs')
const axios = require('axios')

var obj = JSON.parse(fs.readFileSync('apiKey.json', 'utf8'));
const apiKey = obj.apiKey

const stockNames = [
    "AAPL",
    "GOOGL",
    "AMZN",
    "TSLA",
    "FB",
    "TWTR",
    "UBER",
    "LYFT",
    "SNAP",
    "SHOP",
]


var mainController = {
    buyAll: (req, res) => {
        var priceAcumulator = 0;
        //stockNames.forEach((stock) => {
            var stock = "AMZN"
            console.log(stock)
            axios.get(`https://financialmodelingprep.com/api/v3/quote-short/${stock}?apikey=${apiKey}`)
                .then((response) => {
                    var price  = response.data[0].price
                    priceAcumulator += price
                })
                .catch((err) => {
                    console.log(err)
                })
        //})
        return res.send({cost: priceAcumulator})

    }
}

module.exports = mainController