const request = require('postman-request')
const geoCode = require('./utils/geoCode')
const foreCast = require('./utils/forecast')

const address = process.argv[2]

geoCode (address, (error, { lat, lon, location } = {}) => {
    if (error){
        return console.log(error)
    }

    foreCast (lat, lon, (error, data) => {
        if (error){
            return console.log(error)
        }
        
        console.log(location)
        console.log(data)
    })
})