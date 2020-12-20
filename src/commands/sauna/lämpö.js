// Modules
const bent = require('bent');


// Export
module.exports = {
    name: 'lämpö',
    description: 'Shows temperature outside and inside.',
    async execute(message, args, client, db) {
    
        // Let
        let lämpö = db.get('lämpö')

        // Posio
        let apikey = 'sensored'
        let location = encodeURI('Posio')
        const getApi = bent('http://api.openweathermap.org/data/2.5/weather?q=', 'GET', 'json', 200)
        let weather = await getApi(`${location}&appid=${apikey}&units=metric`)

     
  
        // Send
        message.channel.send('Lämpö tällä hetkellä saunassa on ' + lämpö + '°C. \nLämpö tällä hetkellä ulkona on ' + weather.main.temp + '°C, tuntuu kuin ' + weather.main.feels_like + '°C.')
  
      }

    }

