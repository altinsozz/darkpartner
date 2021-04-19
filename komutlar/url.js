const Discord = require("discord.js");
const { Database } = require('npm.db');
const db = new Database("database");

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için \`yönetici\` yetkisine sahip olmalısın!`);
let coinsayi = db.fetch(`coin_${message.author.id}`)
let url = args.slice(0).join(" ")
if(coinsayi < 80) return embed(`❌ | Sunucunuza özel url linki almak için 80 Coine ihtiyacınız var. Bilgi almak için [tıkla](https://discord.gg/sBGxGhcFG4).`);
//if(url > 20) return embed(``)
if(!url) return message.channel.send('Bir Url Belirtin!')
if(db.fetch(`url_${message.guild.id}`)) return embed(`Zaten bir url'ye sahipsin.`)
db.set(`url_${message.guild.id}`, url)
db.set(`1hafta_${message.guild.id}`, Date.now())
db.math(`coin_${message.author.id}`,"-" ,80)
return embed(`Başarıyla ${url} urlsini sunucunuza aldınız!`).then(
client.channels.cache.get('id').send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
:white_check_mark: | **${message.guild.name}** Sunucusu ${url} Urlsini Aldı.
`))
);


async function embed(text) {//Bayrak & WenSamita Neiva
const embed = new Discord.MessageEmbed()//Bayrak & WenSamita Neiva
.setColor("BLUE")//Bayrak & WenSamita Neiva
.setAuthor(//Bayrak & WenSamita Neiva
message.author.tag,//Bayrak & WenSamita Neiva
message.author.avatarURL({ dynamic: true }))//Bayrak & WenSamita Neiva)//Bayrak & WenSamita Neiva
.setDescription(`**${text}**`)//Bayrak & WenSamita Neiva
.setTimestamp()//Bayrak & WenSamita Neiva
.setFooter(client.user.username, client.user.avatarURL());//Bayrak & WenSamita Neiva
let msg = await message.channel.send(embed);//Bayrak & WenSamita Neiva
return msg;//Bayrak & WenSamita Neiva
}//Bayrak & WenSamita Neiva
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['url'],
  permLevel: 0
};

exports.help = {
  name: 'Bayrak',
  desciption: 'WenSamita Neiva',
  usage: 'Bayrak & WenSamita Neiva'
};
