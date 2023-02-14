const { ActivityType, IntentsBitField } = require("discord.js");
const { join } = require("path");

/* Setting the prefix for the bot. */
exports.prefix = "-";

/* Setting the default embed color. */
exports.default_embed_color = 0x0069ff;

/* Getting the token from the .env file. */
exports.token = process.env.DISCORD_TOKEN;

/* Setting the port for the web server. */
exports.port = 3000;

/* Setting the client options. */
exports.client_options = {
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildVoiceStates,
        IntentsBitField.Flags.MessageContent
    ],
    allowedMentions: {
        parse: ["users", "roles"]
    },
    presence: {
        status: "online",
        activities: [
            {
                name: `${this.prefix}help`,
                type: ActivityType.Playing
            }
        ]
    }
}

/* Setting commands directory. */
exports.commands_dir = join(__dirname, "../../commands");

/* Setting events directory. */
exports.events_dir = join(__dirname, "../../events");