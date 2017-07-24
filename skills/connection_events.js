module.exports = function(controller) {

  controller.on('hello', function(bot, message) {

    // a new session with an unknown user has begun
    bot.reply(message, 'Ciao! Io sono un Search bot! Scrivi "help" per avere un\' idea su come posso aiutarti');

  });

  controller.on('welcome_back', function(bot, message) {

    // a known user has started a new, fresh session
    bot.reply(message, 'Ciao! In cosa posso aiutarti? Scrivi "help" per avere dei suggerimenti...');

  });

  controller.on('reconnect', function(bot, message) {

    // the connection between the client and server experienced a disconnect/reconnect
    bot.reply(message, 'Some sub-space interference just caused our connection to be interrupted. But I am back now.');

  });


}
