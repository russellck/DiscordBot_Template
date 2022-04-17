const { MessageMentions: { USERS_PATTERN, ROLES_PATTERN } } = require('discord.js');

module.exports = {
    getUserFromMention: (mention) => {
        // The id is the first and only match found by the RegEx.
        const matches = mention.matchAll(USERS_PATTERN).next().value;

        // If supplied variable was not a mention, matches will be null instead of an array.
        if (!mention) return;

        // The first element in the matches array will be the entire mention, not just the ID,
        // so use index 1.
        const id = matches[1];

        return mention.client.users.cache.get(id);
    },

    getMentionFromUser: (user) => {
        const mention = '<@' + user.id + '>';
        return mention;
    },

    getRoleFromMention: (mention) => {
        const matches = mention.matchAll(ROLES_PATTERN).next().value;

        // If supplied variable was not a mention, matches will be null instead of an array.
        if (!mention) return;

        // The first element in the matches array will be the entire mention, not just the ID,
        // so use index 1.
        const id = matches[1];

        return mention.client.users.cache.get(id);
    },

    getMentionFromRole: (role) => {
        const mention = '<@&' + role.id + '>';
        return mention;
    },
};

