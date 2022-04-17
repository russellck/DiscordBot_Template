const { SlashCommandBuilder } = require('@discordjs/builders');
const { getMentionFromRole, getMentionFromUser } = require('../utils.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('slap')
        .setDescription('How can you slap?')
        .addSubcommand(subcommand =>
            subcommand
                .setName('individual')
                .setDescription('Slap one person in particular')
                .addUserOption(option =>
                    option.setName('user')
                        .setDescription('Who are you slapping?')
                        .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('group')
                .setDescription('Slap a whole group of people')
                .addRoleOption(option =>
                    option.setName('role')
                        .setDescription('What group are you slapping?')
                        .setRequired(true))),

    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'individual') {
            const user = interaction.options.getUser('user');
            console.log('user: ' + user);
            const slapper = getMentionFromUser(interaction.user);
            const slapped = getMentionFromUser(user);
            if (user) {
                console.log(`${interaction.user.tag} in #${interaction.channel.name} slapped ${user.tag}`);
                await interaction.reply({ content: `${slapper} slapped 🖐 ${slapped} 😵‍💫` });
            }
        } else if (interaction.options.getSubcommand() === 'group') {
            const role = interaction.options.getRole('role');
            const slapper = getMentionFromUser(interaction.user);
            const slapped = getMentionFromRole(role);
            if (role) {
                console.log(`${interaction.user.tag} in #${interaction.channel.name} slapped ${role.name}`);
                await interaction.reply({ content: `${slapper} slapped 🖐 a bunch of ${slapped} 😵‍💫` });
            }
        }
    },
};