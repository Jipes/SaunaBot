// Export
module.exports = {
    name: 'ping',
    description: 'Gets ping.',
    execute(message, args, client, db) {

        // Main
        message.channel.send(`🏓Latency: ${Date.now() - message.createdTimestamp}ms. API Latency: ${Math.round(client.ws.ping)}ms`);

    }
}



