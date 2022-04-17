const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./config.json');

const commands = [];
// return an array of all file names in directory that end in .js
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const clientId = 'client id';
const guildId = 'guild id';

// loop through commands .js files and push them to command.data
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}
console.log(commands);

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
