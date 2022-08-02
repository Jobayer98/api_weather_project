const request = require("postman-request")

const foreCast = (lat, lon, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=54968e98d374512342ede548f660d439&query="+lat+","+lon

    request({url, json: true}, (error, { body }={})=>{
        if (error){
            callback("Unable to connect weather service!", undefined);
        }else if (body.error){
            callback("Please provide a valid address!", undefined);
        }else{
            callback(undefined, "It is " + body.current.weather_descriptions + ". Temperature is " + body.current.temperature + " degrees out and " + "Humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = foreCast