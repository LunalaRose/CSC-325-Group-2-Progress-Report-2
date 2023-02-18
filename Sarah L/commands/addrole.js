const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
//developed by Sarah Luetz
module.exports = {
	data: new SlashCommandBuilder()
		.setName('addrole')
		.setDescription('Adds a role to a selected member')
		.addUserOption(option =>
			option.setName('member')
			.setDescription('Member receiving the role')
			.setRequired(true)
		)
		.addRoleOption(option =>
			option.setName('role')
			.setDescription('Role to give')
			.setRequired(true)
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles), //user must have manageroles permission
		async execute(interaction) {
			const member = interaction.options.getMember('member');
			const role = interaction.options.getRole('role');
			member.roles.add(role);
			await interaction.reply({content: 'Role added', ephemeral: true});
		}
};
