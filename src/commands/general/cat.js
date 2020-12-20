// Modules
const bent = require('bent');
const { MessageEmbed } = require('discord.js');

// Export
module.exports = {
    name: 'cat',
    description: 'Shows cat.',
    async execute(message, args, client, db) {
    
    // Main
    let body = await bent("GET", 200, "json", {"x-api-key": "sensored"})("https://api.thecatapi.com/v1/images/search")

    // Embed
        const Cat = new MessageEmbed()

        .setColor('#de90da')
        .setTitle('Cat!')
        .setDescription('Aww cute...')
        .setImage(body[0].url)
        .setTimestamp();

        message.channel.send(Cat)

    }
}

