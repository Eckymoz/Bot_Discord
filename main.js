const { PREFIX, TOKEN } = require('./config');
const { Client } = require('discord.js');
const client = new Client({ disableEveryone: true });

client.on('message', (msg) => {
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  const role = msg.guild.roles.cache.find((r) => r.name === args[0]);
  if (cmd === `${PREFIX}ping`) msg.reply('Pong!');
  if (cmd === `${PREFIX}repeat`) {
    msg.channel.send(args.join(' '));
    msg
      .delete({ timeout: 3000 })
      .then((msg) => console.log('Un message a été supprimé'));
  }
  if (cmd === `${PREFIX}role`) {
    if (!args[0])
      return msg.reply(
        'Il faut que tu spécifie le role tu a le choix entre PC PS4 Switch XBOX et Mobile'
      );
    if (!role) return msg.channel.send("Ce rôle n'existe pas !");
    if (msg.member.roles.cache.find((r) => r.name === args[0])) {
      msg.member.roles.remove(role);
      msg.channel.send(`J'ai supprimé le rôle ${role} à ${msg.author}.`);
    } else {
      msg.member.roles.add(role);
      msg.channel.send(`J'ai ajouté le rôle ${role} à ${msg.author}.`);
    }
  }
});

client.on('guildMemberAdd', (member) => {
  member.send('Salut à toi !');
  const channel = client.channels.cache.find((r) => r.name === 'general');
  channel.send(`${member} a rejoint le serveur !`);
});

client.login(TOKEN);

client.on('ready', () => console.log('Je suis prêt'));
client.on('error', console.error);
client.on('warn', console.warn);
client.on('debug', console.debug);
