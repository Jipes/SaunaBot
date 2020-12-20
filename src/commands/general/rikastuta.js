// Export
module.exports = {
    name: 'rikastuta',
    description: 'Makes someone rich.',
    execute(message, args, client, db) {
    
        // Main
        db.set(message.mentions.users.first() + '_porvari', 'true')
        message.channel.send('Rikastutettiin ' +message.mentions.users.first() + '!')
        
    }
}

