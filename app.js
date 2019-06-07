const geoCoder = require('./utils/location')
const weatherReport = require('./utils/weatherapp')
const mailer = require('./utils/mailer')

geoCoder('New York', (error, { longitude, latitude }) => {

    weatherReport(latitude, longitude, (error, report) => {
      
        mailer(report, (error, sent) =>{
            console.log(sent)
        })
    })
})

