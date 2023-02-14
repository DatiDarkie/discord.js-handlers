const { prefix } = require("../src/utils/constants");
const helpEmbed = require("../src/utils/helpEmbed");

module.exports = {
    name: "messageCreate",
    run (message) {
        if (!message.guild || message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = this.commands.find(cmd => (cmd.name === commandName || (cmd.aliases && cmd.aliases.includes(commandName))));

        if (!command) return;

        if (command.permissions && !message.member.permissions.has(command.permissions)) return;
        if (command.argsRequired && !args.length) return message.reply({ embeds: [helpEmbed(command, prefix)] });

        try {
            command.execute(message, args, this);
        } catch (error) {
            console.error(error);
            return message.reply("❌ An error occurred while executing this command!");
        }
    }
}