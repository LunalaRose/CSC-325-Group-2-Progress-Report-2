require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, Events, Collection } = require('discord.js');
//const prefix = '>';
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessageReactions,
	],
});

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

//gathers commands from the defined file into commands collection
for (const file of commandFiles){
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command){
		client.commands.set(command.data.name, command);
	}
	else {
		console.log(`Warning! The command at ${filePath} is missing a required 'data' or 'execute' property!`);
	}
}

//when bot is ready, display a message in console
client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('Testing time');
});

//Event interaction command handler
client.on(Events.InteractionCreate, async interaction => {
	//checks if an interaction is a command, returns if not
	if (!interaction.isChatInputCommand()) return;
	//gets the command's name
	const command = interaction.client.commands.get(interaction.commandName);
	//if the command doesn't exist throw an error
	if (!command) {
		console.error('No matching command found');
		return;
	}
	//tries to execute the command
	try{
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		await interaction.reply({content: 'there was an error while executing this command', ephemeral: true});
	}
});

client.login(process.env.DISCORDJS_BOT_TOKEN);

