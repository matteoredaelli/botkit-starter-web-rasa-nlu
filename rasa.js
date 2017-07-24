var rasa = require('botkit-rasa')({rasa_uri: 'http://poisson.it.pirelli.com:5000', rasa_model:'pirelli'});

module.exports = rasa;
