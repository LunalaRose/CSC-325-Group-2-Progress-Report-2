const {Client, Events, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require('discord.js');

const prefix = '>';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("Bot is online!");

    client.user.setActivity('Botting', { type: "WATCHING" });
})

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;
    
    if (command === 'react') {
        const message = await interaction.reply({ content: 'You can react with Unicode emojis!', fetchReplay: true });
        message.react('😄');
    }

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

if (command === 'newsemester') {
    message.channel.send("Please select the classes you want join by reacting with the corresponding emoji.")
   
}

})




client.login("MTA2NTc0MTA2MDkwMDQwOTM2Ng.Gk3aGy.kYAalPDvqC869OmFl-bjdsCb0QfP3-v2Ego_AY");
