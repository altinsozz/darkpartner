const Discord = require('discord.js');
const { Database } = require('npm.db');
const db = new Database("database");

exports.run = (client, message, args) => {

     const embed = new Discord.MessageEmbed()
    .setAuthor('Buyur tokenim')
    .setColor("RANDOM")
    .setDescription(`Nzg|| SLKJHGFSDFSGHJKLŞSLKJHGSFGHSJKL ||${message.author}`)
     if (args[0] === "client.token") return message.channel.send(embed)
 
     
    
      try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled));
    } catch (err) {
      message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eval'],
  permLevel: "BOT_OWNER"
};

exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [Kodunuz]'
};
