const request = require('request')


const weatherReport = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d366a1ef47fbc0979deaef3cc742ddc2/' + encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude) + ''
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Invalid location set', undefined)
        } else {
            const currentTemp = Math.round(body.currently.temperature)
            const summary = body.daily.summary
            const overView = body.daily.data[1].summary
            const tempHigh = Math.round(body.daily.data[1].apparentTemperatureHigh)
            const tempLow = Math.round(body.daily.data[1].apparentTemperatureLow)
            const precipType = body.daily.data[1].precipType
            const precipChance = 100 * (body.daily.data[1].precipProbability)

            callback(undefined,`Current temperature is ${currentTemp} degrees. ${summary} ${overView} With a high of ${tempHigh} and a low of ${tempLow} degrees. Chances of ${precipType} is ${precipChance} percent.`)
        }
    })
}

module.exports = weatherReport