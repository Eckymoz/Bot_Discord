const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (client, message, args) => {

    message.delete({ timeout: 3000 });

    if (args[0] === "cat") {
        const cat = await fetch("http://aws.random.cat/meow")
            .then(res => res.json())
            .then(json => json.file);


        const catEmbed = new MessageEmbed()
            .setImage(cat)
            .setFooter("Powered by 'http://aws.random.cat/meow'");
        message.channel.send(catEmbed)
    }
};
