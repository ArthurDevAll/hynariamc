const discord = require('discord.js');

const client = new discord.Client();

var prefix = "*";

client.login("NDkyNjczNzUxNjAzNzQwNjcy.DqEKEA.A7lvSJsyo1xpbgXhjiLJHCwj-pQ");

client.on("ready", () => {

    console.log("Je suis prêt !")
    client.user.setActivity("*help || Dev par Arthur");
});

client.on('message', message => {

    if(message.content === "Bonjour"){
        message.reply("Salut :p");
        console.log('Le bot à dis bonjour');
    }

    if(message.content === prefix + "help"){
        var help_embed = new discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Voici les commandes d'aides du bot HynariaMc ⚡️")
        .setDescription("Je suis le bot du serveur Hynaria")
        .addField("💥 *help", "Affiche les commandes du bot !")
        .addField("💥 Bonjour", "Le bot réponds !")
        .addField("💥 *ip", "Affiche l'ip du serveur !")
        .addField("💥 *grades", "T'envoie la liste des grades")
        .setFooter("Menu d'aide fait par Arthur🖇🇨🇦#5585 !")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur à demander le menu d'aide !")
    }

    if(message.content === prefix + "ip"){
        message.reply("L'ip du serveur : Hynaria.omgcraft.fr");
        console.log('Ip envoyée');
    }

    if(message.content === prefix + "grades"){
        message.channel.send("Les grades achetables sont : 🛡 Guerrier ( 2.99 € ) | ⚔️ Chevalier ( 5.99 € ) | ⛏ Titan ( 8.99 € ) | 💎 Légende ( 10.99 € )");
    }
});
