const geoCode = require('./utils/geoCode')

const address = process.argv[2]

geoCode (address, (error, { lat, lon, location } = {}) => {
    if (error){
        return console.log(error)
    }

    console.log(location)
})