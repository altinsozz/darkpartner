const Discord = require("discord.js");//Bayrak & WenSamita Neiva
const { Database } = require('npm.db');//Bayrak & WenSamita Neiva
const db = new Database("database");//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
exports.run = async (client, message, args) => {//Bayrak & WenSamita Neiva
let coin = db.fetch(`coin_${message.author.id}`) || 0;//Bayrak & WenSamita Neiva
let kullanıcı = message.mentions.users.first();  //Bayrak & WenSamita Neiva
let coinsayi = args[1]//Bayrak & WenSamita Neiva
if(!kullanıcı) return message.channel.send('Lütfen Kullanıcı Etiketleyin');//Bayrak & WenSamita Neiva
if(!coinsayi) return message.channel.send('Lütfen Miktar Yazın');//Bayrak & WenSamita Neiva
if(coinsayi < 5) return message.channel.send(`${message.author} Minimum **5** Coin Yollayabilirsin!`)//Bayrak & WenSamita Neiva
if(coin < coinsayi) return message.channel.send(`${message.author} Senin Bakiyende **${coinsayi}** Coins Yok!`)//Bayrak & WenSamita Neiva
db.add(`coin_${message.author.id}`, -coinsayi)//Bayrak & WenSamita Neiva
db.add(`coin_${kullanıcı.id}`, -coinsayi)//Bayrak & WenSamita Neiva
return message.reply(`${kullanıcı} kişisine ${coinsayi} Coin Gönderildi!`)//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva
exports.conf = {//Bayrak & WenSamita Neiva
  enabled: true,//Bayrak & WenSamita Neiva
  guildOnly: false,//Bayrak & WenSamita Neiva
  aliases: ['pay'],//Bayrak & WenSamita Neiva
  permLevel: 0//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
exports.help = {//Bayrak & WenSamita Neiva
  name: 'pay',//Bayrak & WenSamita Neiva
  desciption: 'WenSamita Neiva',//Bayrak & WenSamita Neiva
  usage: 'Bayrak & WenSamita Neiva'//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva
