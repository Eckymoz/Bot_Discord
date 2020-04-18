const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const client = new Client({ disableEveryone: true });
const fs = require('fs');

client.PREFIX = PREFIX;
//client.mongoose = require("./utils/mongoose");
client.commands = new Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith(".js")) return undefined;
        const props = require(`./commands/${file}`);
        const cmdName = file.split(".")[0];
        console.log(`Commande ${cmdName} chargée.`);
        client.commands.set(props, cmdName);
    })
})

client.on('ready', () => require('./events/ready.js')(client));
client.on('message', (msg) => require('./events/message.js')(client, msg));
client.on('guildMemberAdd', (member) => require('./events/guildMemberAdd.js')(client, member));

//client.mongoose.init();
client.login(TOKEN);
client.on('error', console.error);
client.on('warn', console.warn);
