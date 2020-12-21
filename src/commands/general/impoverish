// Export
module.exports = {
    name: 'impoverish',
    description: 'Makes user poor.',
    execute(message, args, client, db) {
    
        // Check
        if (!args[0]) return message.channel.send('Mention someone!');

        // Let
        let name = args[0]?.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        let user = args[0].match(/^<@!?(\d+)>/)
        || message.guild.members.cache.find(m => { if (m.nickname) { return m.nickname.match(new RegExp(name, "ui")); } })
        || message.guild.members.cache.find(m => m.user.username.match(new RegExp(name, "ui")))
        || message.guild.members.cache.find(m => m.id.match(new RegExp(name, "ui")));
        if (Array.isArray(user)) user = message.guild.members.cache.get(user[1]);

        // Check
        if(!user) return message.channel.send('No user found.');

        // Set
        db.set(user + '_merchant', false)

        // Message
        message.channel.send(user.user.tag + ' is now poor!')
        
    }
}

