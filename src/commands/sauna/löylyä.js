// Export
module.exports = {
    name: 'löylyä',
    description: 'Heittää vettä kiukaalle.',
    async execute(message, args, client, db) {

        // Cooldown1
        let cooldown = 60000;
        let lastLöyly = await db.get(`lastLöyly`);
        if (lastLöyly !== null && cooldown - (Date.now() - lastLöyly) > 0) {
          message.channel.send('Odota ny hetken edes.')
      } else {
      
    
        // Check
        if(db.get(message.author.id + '_saunassa') == 'false'){

            message.channel.send('Et ole edes saunassa!')
            return;
            
        }


        // Math
        let lämpö1 = Math.floor(Math.random() * (100 - 70)) + 70;

        if(lämpö1 < db.get('lämpö')) {

            let lämpö2 = Math.round(lämpö1 / 15);
            let lämpö3 = Math.floor(Math.random() * lämpö2) + 1;
            db.set('lämpö', db.get('lämpö') - lämpö3);
            db.set('is', 'true');
            message.channel.send('Lämpö laskee ' + db.get('lämpö') + '°C!')

        }

        else if(lämpö1 > db.get('lämpö')); {

            if(db.get('is') == 'true') {

                db.set('is', 'false')
                return;

            }

            let lämpö2 = Math.round(lämpö1 / 15);
            let lämpö3 = Math.floor(Math.random() * lämpö2) + 1;
            db.set('lämpö', db.get('lämpö') + lämpö3);
            message.channel.send('Lämpö nousee ' + db.get('lämpö') + '°C!')

        }

        // Cooldown2
        db.set('lastLöyly', Date.now())
    }
}
}
    

