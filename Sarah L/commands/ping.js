const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Should reply pong'),
	async execute(interaction) {
		await interaction.reply({content: 'Pong!', ephemeral: true});
	},
};

