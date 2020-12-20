// Modules
const bent = require('bent');
const { MessageEmbed } = require('discord.js');

// Export
module.exports = {
    name: 'dog',
    description: 'Shows dog.',
    async execute(message, args, client, db) {
    
    // Main
    let body = await bent("GET", 200, "json", {"x-api-key": "sensored"})("https://api.thedogapi.com/v1/images/search")

    // Embed
        const Dog = new MessageEmbed()

        .setColor('#de90da')
        .setTitle('Dog!')
        .setDescription('Aww cute...')
        .setImage(body[0].url)
        .setTimestamp();

        message.channel.send(Dog)

    }
}