const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, PermissionFlagsBits, ChannelType, GuildChannel} = require('discord.js');

const prefix = '/';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("Bot is online!");

    client.user.setActivity('Botting', { type: "WATCHING" });
})

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //COMMANDS

//test command

if (command === 'test') {
    message.channel.send("Bot is working!")
}

//initial post command

//var guild = client.guilds.cache.get ('1065686582985764907')


if (command === 'create') {
  message.channel.send("Channel Created!");

 message.guild.channels.create({
    name: 'class',
    type: ChannelType.GuildText,
    permissionOverwrites: [{
            id: message.guild.roles.everyone,
            deny: [PermissionFlagsBits.ViewChannel]
        },
        {
            id: message.author.id,
            allow: [PermissionFlagsBits.ViewChannel]
        }

    ]
})

.then(console.log)
.catch(console.error);



// Move Channel to Category
//await channel.setParent('1015950001920278548');

}


})

client.login("MTA2NTc1NzQ1MjkyNDA5NjU4Mg.GwYKBc.CeyQTgSelPOoxEjeRE-4klmevL6Fwa2SMRsV-U");
