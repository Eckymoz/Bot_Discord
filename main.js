const {Client} = require('discord.js');
const client = new Client({disableEveryone: true});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping')  msg.reply('Pong!');
  if (msg.content === 'everyone')  msg.reply('@everyone Salut à tous !');
  if (msg.content === 'noteeveryone')  msg.reply('@everyone (noteeveryone) Salut à tous !');
  
});

client.login('Njk4ODM4NTMyMDg4NzkxMTAx.XpMAAg.3FEND7O1CIrCKIN5MCcFXvYYcVM');