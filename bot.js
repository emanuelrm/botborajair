var Botkit = require('./node_modules/botkit/lib/Botkit.js');
var exec = require('child_process').exec;

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: 'xoxb-214420027538-aaa2dtEndLRftYxfH9pY0ETA'
}).startRTM();


controller.hears(['OI'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "TO";

    bot.reply(message, helloText);
});

controller.hears(['o que vc quer que eu faça agora'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "Faz o que você quiser, se quiser plantar bananeira, planta ae";

    bot.reply(message, helloText);
});


controller.hears(['Criar Rdm'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "Please speak in English.";

    bot.reply(message, helloText);
});

controller.hears(['Create Rdm'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "It's done dumbass.";

    bot.reply(message, helloText);
});

controller.hears(['se ta forte hein'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "A última vez que fui no banheiro tava bem forte mesmo.";

    bot.reply(message, helloText);
});

controller.hears([':eyes:'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "Ta olhando o que seu frango.";

    bot.reply(message, helloText);
});

controller.hears(['partiu'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "Milkshake.";

    bot.reply(message, helloText);
});

controller.hears(['chegou cedo'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "Eu não sei porque esse pessoal chega antes das 07:30, vou conversar com meu chefinho.";

    bot.reply(message, helloText);
});

controller.hears(['bora trabalhar'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "BOSTA MESMO.";

    bot.reply(message, helloText);
});

controller.hears(['ta frio neh'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "SE TIVESSE CALOR, TAVA CALOR NEH.";

    bot.reply(message, helloText);
});

controller.hears([':hamburger:'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "Bora montar uma banda.";

    bot.reply(message, helloText);
});

controller.hears(['vc toca o que'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "Eu TOCO FOME.";

    bot.reply(message, helloText);
});

controller.hears(['IH'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "NUM";

    bot.reply(message, helloText);
});

controller.hears(['TA'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "BAUM";

    bot.reply(message, helloText);
});

controller.hears(['bora bolacha'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "Aqui é só proteína seu :chicken: ";

    bot.reply(message, helloText);
});

controller.hears(['bom dia'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "Bom dia de cú é rola";

    bot.reply(message, helloText);
});

controller.hears(['bora Pw'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "Bora D3 Porra";

    bot.reply(message, helloText);
});

controller.hears(['borá'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "Espera ae deixa eu pegar uma cerveja";

    bot.reply(message, helloText);
}); 


controller.hears(['criarbranchweb'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "";

    exec('/home/emanuel/Projetos/banco/automacao/dbaboot.sh 30-1115', function (err, stdout, stderr){
        console.log(stdout);
    })

    bot.reply(message, "Branch Criada");
}); 

controller.hears(['tá trabalhando'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var helloText = "nao neh tá doidão, to fazendo duolingo";

    bot.reply(message, helloText);
});




