// Modules
const config = require("./../config.json");
const chalk = require('chalk');
const enmap = require("enmap")
const db = new enmap({ name: "database"})


// Export
module.exports = async (client, message) => {

    // Set
    client.config = config;


    // Check
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    // Const
    const args = message.content.slice(config.prefix.length).split(' ');
    const commandName = args.shift().toLowerCase();
    const cmd = client.commands.get(commandName);


    // Check
    if (!cmd) {
    message.channel.send("That's not a command!")
    return
    };

    // Execute
    try {
        cmd.execute(message, args, client, db);
    } catch (error) {
        console.log(chalk.red(error));
        message.reply('There was an error trying to execute that command!');
    }
}