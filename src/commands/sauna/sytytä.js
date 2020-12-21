// Modules
const bent = require('bent');

// Export
module.exports = {
    name: 'sytytä',
    description: 'Lights the sauna stove.',
    async execute(message, args, client, db) {
    

        // Posio
        let apikey = 'f5e3575bf908edd088dd846edd443e8a'
        let location = encodeURI('Posio')
        const getApi = bent('http://api.openweathermap.org/data/2.5/weather?q=', 'GET', 'json', 200)
        let weather = await getApi(`${location}&appid=${apikey}&units=metric`)
    
        // Math
        let lämpö = Math.floor(Math.random() * 25) + 60;
        db.set('lämpö', lämpö)
        message.channel.send('Sauna on sytytetty!')
        setTimeout(() => {  message.channel.send('Saunan lämpötila on nyt ' + lämpö + '°C.'); }, 5000);
        
        // Low
        var timerID = setInterval(function() {
            if(weather.main.temp < db.get('lämpö')){
            db.math('lämpö', '-',  Math.floor(Math.random() * 2) + 1);
            
        }
            else{

                clearInterval(timerID)
                message.channel.send('Sauna on sammunut')

            }

        }, 60 * 1000); 
    }
}

