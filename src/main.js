// Modules
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.config = require('./config.json');
const path = require('path')
const chalk = require('chalk');


// Set 
client.commands = new Discord.Collection();


// Handler Finder
fs.readdir('./handlers/', (err, files) => {
    if (err) return console.error(err)

    files.forEach(file => {

        const event = require(path.join(__dirname, 'handlers', file));
        event.run(client);

    })

})
    
process.on('uncaughtException', (err) => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, 'g'), './');
    console.error(chalk.red(errorMsg));
    console.error(chalk.red(err));
});
    
process.on('unhandledRejection', err => {
    console.error(chalk.red(err));
});


// Shut Down
process.on( 'SIGINT', function() {
console.log(chalk.greenBright('\nShutting down.'))
client.destroy()
process.exit()
});

// Login
client.login(client.config.token);

// Export
exports.client = client;
