const { MessageEmbed } = require('discord.js');

module.exports = (client, message) => {
    const exampleEmbed = new MessageEmbed()
        .setAuthor('Collec Bot', 'https://zupimages.net/up/20/16/pp9p.jpg')
        .setColor('#0099ff')
        .setTitle("Bienvenue dans le menu d'Aide")
        .setThumbnail('https://zupimages.net/up/20/16/pp9p.jpg')
        .setDescription('Version 1.0 du Bot')
        .addFields(

            { name: '\u200B', value: '\u200B' },
            { name: ':peach: `!collec benjo`', value: 'Some value here', inline: true },
            { name: '!collec repeat', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true }

        )
        .setTimestamp()
        .setFooter('Le meilleur bot de tout les temps');

    message.channel.send(exampleEmbed);
};
