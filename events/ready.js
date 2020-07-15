module.exports = client => {
    console.log('Je suis prêt');

    console.log(`${client.user.tag} observe les ${client.guilds.cache.map(g =>
        g.memberCount).reduce((a, b) => a + b)}`);

    let activities = ['?help', `avec ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs`, 'avec Greg']
    client.user.setPresence({
        activity: {name: 'with Eckymoz', type: 'PLAYING'}
        , status: 'dnd'
    });

    setInterval(() => client.user.setPresence({
        activity: {
            name: `${activities[Math.floor(Math.random() * activities.length)]}`,
            type: `PLAYING`
        },
        status: 'dnd'
    }), 3000);
}
