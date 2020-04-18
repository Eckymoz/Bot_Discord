const { MessageEmbed, Collector, ReactionEmoji } = require('discord.js');

module.exports = async (client, message, args) => {

    try {

        const embed = new MessageEmbed()
            .setTitle(args.join(" "))
            .setColor("#7289DA");
        const pollTitle = await message.channel.send({ embed });
        await pollTitle.react('✔️')
        await pollTitle.react('❌')

        //Collecteurs 

        const filter = reaction => reaction.emoji.name === '✔️';
        const collector = pollTitle.createReactionCollector(filter, {
            time: 15000
        });
        collector.on("collect", r => console.log(`${r.emoji.name}`));

        const filter2 = reaction => reaction.emoji.name === '❌';
        pollTitle.createReactionCollector(filter2, {
            time: 15000
        });
        collector.on("collect", r => console.log(`${r.emoji.name}`));

    } catch (error) {
        console.log(error);
    }

}

