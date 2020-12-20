// Modules
const fs = require('fs')
const chalk = require('chalk')

// Run
exports.run = async (client) => {

    // Loader
    fs.readdir('./events', (err, files) => { 
            
        // Log
        console.log(chalk.white('------------------------------------------------------------'))

        // Error
        if (err) return console.error(err)

        // Main
        files.forEach(file => { 

            if (!file.endsWith('.js')) return;
            const event = require(`../events/${file}`);
            let eventName = file.split('.')[0];
            client.on(eventName, event.bind(null, client));
            console.log(chalk.yellowBright('Successfully loaded: Event |', eventName))
     
        });
    });
};