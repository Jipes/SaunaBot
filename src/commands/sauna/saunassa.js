// Export
module.exports = {
    name: 'saunassa',
    description: 'Shows list of everyone in sauna.',
    execute(message, args, client, db) {
    
        // Main
        message.channel.send(db.get('saunassa'))
       
    }
}

