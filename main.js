const {PREFIX, TOKEN} = require ("./config");
const {Client} = require('discord.js');
const client = new Client({disableEveryone: true});

client.on('ready', () => {
  console.log(`Je suis prêt ! `);
});

client.on('message', msg => {
  if (msg.content.startsWith(`${PREFIX}ping`))  msg.reply('Pong!');
});

client.login(TOKEN);