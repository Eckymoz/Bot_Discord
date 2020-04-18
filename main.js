const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const client = new Client({ disableEveryone: true });

client.PREFIX = PREFIX;
//client.mongoose = require("./utils/mongoose");
client.commands = new Collection();

client.commands.set('help', require('./commands/help.js'));
client.commands.set('repeat', require('./commands/repeat.js'));
client.commands.set('role', require('./commands/role.js'));
client.commands.set('info', require('./commands/info.js'));
client.commands.set('animals', require('./commands/animals.js'));
client.commands.set('poll', require('./commands/poll.js'));

client.on('ready', () => require('./events/ready.js')(client));
client.on('message', (msg) => require('./events/message.js')(client, msg));
client.on('guildMemberAdd', (member) => require('./events/guildMemberAdd.js')(client, member));

//client.mongoose.init();
client.login(TOKEN);
client.on('error', console.error);
client.on('warn', console.warn);
