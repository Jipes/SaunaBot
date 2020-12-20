// Export
module.exports = {
    name: 'avannossa',
    description: 'Shows list of everyone in hole in ice.',
    execute(message, args, client, db) {
    
        // Main
        message.channel.send(db.get('avannossa'))
       
    }
}

