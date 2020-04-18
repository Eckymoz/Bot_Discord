exports.run = (client, message, args) => {

  const role = message.guild.roles.cache.find(r => r.name === args[0]);

  if (!role) return message.channel.send("Ce rôle n'existe pas !");

  if (message.member.roles.cache.find((r) => r.name === args[0])) {
    message.member.roles.remove(role);
    message.channel.send(`J'ai supprimé le rôle ${role} à ${message.author}.`);
  } else {
    message.member.roles.add(role);
    message.channel.send(`J'ai ajouté le rôle ${role} à ${message.author}.`);
  }
};

exports.help = {
  name: "role"
}