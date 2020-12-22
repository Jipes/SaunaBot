// Modules
const bent = require('bent');
const discord = require('discord.js');

// Export
module.exports = {
    name: 'stats',
    description: 'Shows dog.',
    async execute(message, args, client, db) {
    
   

    // Embed
        const stats = new discord.MessageEmbed()

        .setColor('#de90da')
        .setTitle('Stats')
        .setDescription('Test')
        .addField('Node.js Version', process.version, true)
        .addField('Discord.js Version', discord.version, true)
        .addField('Servers', client.guilds.cache.size, true)
        .setFooter('Requested by ' + message.author.tag)
        .setTimestamp();

        message.channel.send(stats)

    }
}
