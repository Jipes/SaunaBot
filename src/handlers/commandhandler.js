// Modules
const fs = require('fs');
const chalk = require('chalk');

// Run
exports.run = async (client) => {

    // Log
    console.log(chalk.white('------------------------------------------------------------'))

    // Loader1
    async function load_command_from_directory(command_category) {
        fs.readdir(`./commands/${command_category}`, (err, files) => {
            if (err) return console.error(err);
            files.forEach(file => {
                if (!file.endsWith('.js')) return;
                let subCommands= require(`../commands/${command_category}/${file}`);
                client.commands.set(subCommands.name, subCommands);
                console.log(chalk.blueBright('Successfully Loaded: Command |', subCommands.name));
            });
        });
    }
    
    // Categories
    let command_categories = {
        general: 'general',
        sauna: 'sauna'
    }

    // Loader2
    for (let command in command_categories) {
        let value = command_categories[command];
        load_command_from_directory(value)
    }
}

