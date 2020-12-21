// Export
module.exports = {
    name: 'saunassa',
    description: 'Näyttää kaikki käyttäjät saunassa.',
    execute(message, args, client, db) {
    
        // Main
        message.channel.send(db.get('saunassa'))
       
    }
}

