const { EmbedBuilder } = require("discord.js");
const { default_embed_color } = require("./constants");

module.exports = function helpEmbed (command, prefix) {
    const embed = new EmbedBuilder()
    .setColor(default_embed_color);

    command.name && embed.setTitle(`Command ${command.name}`);
    command.description && embed.setDescription(command.description);
    command.aliases && embed.addFields({ name: "Aliases:", value: command.aliases.map(alias => prefix + alias).join(", ") });
    command.usages && embed.addFields({ name: "Usages:", value: command.usages.map(usage => `${prefix + command.name} ${usage}`).join(", ") });
    command.examples && embed.addFields({ name: "Examples:", value: command.examples.map(example => `${prefix + command.name} ${example}`).join(", ") });

    return embed;
}