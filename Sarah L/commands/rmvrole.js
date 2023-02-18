const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
//developed by Sarah Luetz
module.exports = {
	data: new SlashCommandBuilder()
		.setName('rmvrole')
		.setDescription('Removes a role from a selected member')
		.addUserOption(option =>
			option.setName('member')
			.setDescription('Member losing the role')
			.setRequired(true)
		)
		.addRoleOption(option =>
			option.setName('role')
			.setDescription('Role to remove')
			.setRequired(true)
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles), //user must have manageroles permission
		async execute(interaction) {
			const member = interaction.options.getMember('member');
			const role = interaction.options.getRole('role');
			member.roles.remove(role);
			await interaction.reply({content: 'Role removed', ephemeral: true});
		}
};
