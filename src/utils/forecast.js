const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    url = 'https://api.darksky.net/forecast/abf64c0c8b84bb153cb936526676cbd6/'+latitude+','+longitude
    request({url:url, json:true}, (error,{ body }) =>{
        if(error){
            callback("Unable connect to weather service!",undefined)
        } else if(body.error){
            callback("Unable to find location",undefined)

        } else{   
            callback(undefined,body.daily.data[0].summary + 'It is currently ' +
            body.currently.temperature +' degress out. there is a '+ body.currently.precipProbability +' % chance of rain')
        }
    })
}

module.exports = forecast