const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//finds the commands folder and places the exported data in json format
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}
//??
const rest = new REST({version: '10'}).setToken(token);
//Communicates with discord to register the commands found
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);
		//regisers only to my personal server at the moment, switch to second line for global registration
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			//Routes.applicationCommands(clientId),
			{body: commands},
		);
		console.log('Sucessfully reloaded application commands');
	}
	catch (error){
		console.error(error);
	}
})();