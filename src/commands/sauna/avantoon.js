// Export
module.exports = {
    name: 'avantoon',
    description: 'Gets you to hole in ice.',
    async execute(mmessage, args, client, db) {
    
        // Check
        if(db.includes('avannossa', message.author.username)){

            message.channel.send('Olet jo avannossa!')
            return

        }
   
        // Main
        db.push('avannossa', message.author.username);
        if(db.includes('saunassa', message.author.username))db.remove('saunassa', message.author.username);
        db.math('lämpö', '-', Math.floor(Math.random() * 5))
    
        // Message
        message.channel.send('Menet avantoon!')
       
    }
}
