// Modules
const chalk = require('chalk');

// Export
module.exports = async (client) => {

    // Log
    console.log(chalk.white('------------------------------------------------------------'))
    console.log(chalk.greenBright('Logged in as ' + client.user.tag))

}