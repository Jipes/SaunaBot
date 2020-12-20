// Modules
const fs = require('fs');
const chalk = require('chalk');

// Run
exports.run = async (client) => {

    // Log
    console.log(chalk.white('------------------------------------------------------------'))

    // Const
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    // Mapper
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
    }

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
    var command_categories = {
        general: 'general',
        sauna: 'sauna'
    }

    // Loader2
    for (var command in command_categories) {
        var value = command_categories[command];
        load_command_from_directory(value)
    }



}
