const { MessageEmbed } = require('discord.js');

module.exports = (Client, message) => {
  const exampleEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Some title')
    .setDescription('Some description here')
    .addFields(
      { name: 'Regular field title', value: 'Some value here' },
      { name: '\u200B', value: '\u200B' },
      { name: 'Inline field title', value: 'Some value here', inline: true },
      { name: 'Inline field title', value: 'Some value here', inline: true }
    )
    .addField('Inline field title', 'Some value here', true)
    .setTimestamp()
    .setFooter('Some footer text here', (message.author.displayAvatarURL()));

  message.channel.send(exampleEmbed);
};
