// Export
module.exports = {
    name: 'uptime',
    description: 'Shows you uptime of bot.',
    async execute(message, args, client, db) {
    
    // Counter
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    
    // Let
    let uptime = `${days} days, ${hours} hrs, ${minutes} mins and ${seconds} secs!`;
    
    // Message
    message.channel.send(uptime)
    
    
    
  }
}


