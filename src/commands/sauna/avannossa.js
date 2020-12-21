// Export
module.exports = {
    name: 'avannossa',
    description: 'Näyttää kaikki käyttäjät avannossa.',
    execute(message, args, client, db) {
    
        // Main
        message.channel.send(db.get('avannossa'))
       
    }
}

