const dotenv = require("dotenv");
const { Client, Events, GatewayIntentBits } = require("discord.js");
const { random } = require("./utils/random");
const { sendGif } = require("./responseFunctions/sendGif");
const {
  conditionalTriggered,
} = require("./responseFunctions/conditionalTriggered");
const { groupCommons } = require("./responseFunctions/groupCommons");

dotenv.config();

const { TOKEN } = process.env;

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
});

client.login(TOKEN);

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const randomReply = random(100);

  if (sendGif(randomReply, message.channel)) return;

  if (conditionalTriggered(message)) return;

  groupCommons(message);
});
