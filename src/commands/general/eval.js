// Modules
const { MessageEmbed } = require("discord.js");

// Export
module.exports = {
    name: 'eval',
    description: 'Evaluates your code.',
    execute(message, args, client, db) {

    // Cleans
    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }

        // Check
        if(message.author.id !== client.config.ownerid) return;
        
        // Main
        try {
            let evalStart = process.hrtime()
            let evalDiff;
            let code = args.join(" ");
            let evaled = eval(code);
            evalDiff = process.hrtime(evalStart)

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

                // Succes
            const evalSuccessEmbed = new MessageEmbed()
                .setColor('#00d166')
                .setTitle('Success!')
                .addField('Output:', `\`\`\`JavaScript\n${evaled}\n\`\`\``)
                .addField('Evaled in:', `${evalDiff[0] > 0 ? `${evalDiff[0]}s` : ''}${evalDiff[1] / 1000000}ms.`)
                .setTimestamp()
            message.channel.send(evalSuccessEmbed)

            // Error
        } catch(err) {
            const evalFailEmbed = new MessageEmbed()
                .setColor('#f93a2f')
                .setTitle('Error!')
                .addField('Output:', `\`\`\`JavaScript\n${clean(err)}\n\`\`\``)
                .setTimestamp()
            message.channel.send(evalFailEmbed)
        
        }  
}}
