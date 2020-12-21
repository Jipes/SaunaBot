// Export
module.exports = {
    name: 'saunaan',
    description: 'Liikuttaa sinut saunaan.',
    execute(message, args, client, db) {
    
        // Check
        if(db.includes('saunassa', message.author.username)){

            message.channel.send('Olet jo saunassa!')
            return

        }

        // Main
        db.push('saunassa', message.author.username);
        if(db.includes('avannossa', message.author.username))db.remove('avannossa', message.author.username);
        db.math('lämpö', '-', Math.floor(Math.random() * 8))

        // Message
        message.channel.send('Menet saunaan!')  
       
    }
}

