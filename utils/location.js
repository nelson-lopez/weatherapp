
const request = require('request')

const geoCoder = (city, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(city) + '.json?access_token=pk.eyJ1IjoibmVsc29ubG9wZXoiLCJhIjoiY2p3aXBhcWZmMGprdDQ5bXgxZ2Rzd2s3bSJ9.qFutG2cq7WoMdnRTNyCjNg'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Cannot connect to location service!', undefined)
        } else if (body.features.length === 0) {
            callback('Invalid location given!', undefined)
        } else {
            const longitude = body.features[0].center[0]
            const latitude = body.features[0].center[1]
            callback(undefined, { latitude, longitude })
        }
    })
}


module.exports = geoCoder