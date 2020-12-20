// Modules
const bent = require('bent');

// Export
module.exports = {
    name: 'puita',
    description: 'lol',
    aliases: ['TTÄÄÄÄÄ'],
    async execute(message, args, client, db) {
    
        if(db.get('puut') + '20%' < '100%'){

            db.set('puut', '100%')
            message.channel.send('Saunan pesä on nyt täynnä!')
            return
        }

        db.math('puut', 'add', '20')
        message.channel.send('Saunan pesässä on nyt ' + db.get('puut') + '% täynnä!')

    }
}

