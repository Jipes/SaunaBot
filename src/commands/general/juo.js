// Export
module.exports = {
    name: 'juo',
    description: 'You can drinks something with this.',
    execute(message, args, client, db) {

    
      // Switch
        switch(args[0]) {

              // Viski
            case 'viskiä':
              
            if(db.get(message.author.id + '_porvari')){
                message.channel.send('Juot viskiä!')
                return;
            }

            message.channel.send('Ei sul tollaseen varaa oo!')
            
              break;

              // Viini
            case 'viiniä':
              
            message.channel.send('Juot viiniä!')
           
              break;

                // Vodka
              case 'vodkaa':
              
                message.channel.send('Juot vodkaa!')
               
                  break;

                  // Error
            default:
              message.channel.send('Tuo ei ole juoma!')
              return;
          } 

    }
}
