// Export
module.exports = {
    name: 'köyhyytä',
    description: 'Makes someone poor.',
    execute(message, args, client, db) {
    
        // Main
        db.set(message.mentions.users.first() + '_porvari', false)
        message.channel.send('Köyhyytettiin ' + message.mentions.users.first() + '!')
        
    }
}

