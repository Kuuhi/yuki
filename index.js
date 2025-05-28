const { Client, GatewayIntentBits, Partials, messageLink } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildScheduledEvents,
  ],
  partials: [
    Partials.User,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Message,
    Partials.Reaction,
    Partials.GuildScheduledEvent,
    Partials.ThreadMember,
  ],
});

client.once('ready', () => {
  console.log("start-up");
});

client.login(process.env.TOKEN)

require('dotenv').config();

const fs = require("fs");

function getRandomLineFromFile(filePath) {
  const data = fs.readFileSync(filePath, "utf8");

  const lines = data.split("\n").map(line => line.trim()).filter(line => line.length > 0);

  if (lines.length === 0) return

  const randomIndex = Math.floor(Math.random() * lines.length);

  return lines[randomIndex];
}

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.mentions.users.has(client.user.id)) {
    message.reply({
      content: getRandomLineFromFile(filePath),
      allowedMentions: {parse: []}
    })
  }
})
