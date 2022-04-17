#Discord Bot Template

A lot of the items in this template are a result of following the tutorials from the discord.js documentation. 

A ESLint format is included for VS Code, I changed a few things from what the documentation at https://discordjs.guide/preparations/setting-up-a-linter.html#setting-up-eslint-rules

Commands and events folders are set up
- To add a bot command, add a new .js file using discord.js syntax: https://discordjs.guide/creating-your-bot/command-handling.html#individual-command-files
- Same for new event using this syntax: https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files

A few util functions are included, simple ones I used to improve readability.

Once your config.json is set up correctly and the bot has been added to your server, you can add the commands by running deploy-commands. This uses the client and guild ids in config.json.
deploy-guild-commands.js uses whatever client and guild ids the user provides in the file