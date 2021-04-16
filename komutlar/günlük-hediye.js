const Discord = require("discord.js");
const { Database } = require('npm.db');
const db = new Database("database");
const ms = require('parse-ms')


exports.run = async (client, message, args) => {
let saat = 43200000
let süre = db.fetch(`coinaldi_${message.author.id}`)
let bayrakwensamita = ms(saat - (Date.now() - süre))
if(süre !== null && saat - (Date.now() - süre) > 0) {
return message.reply(`Günlük ödülünü almak için ${bayrakwensamita.hours}H ${bayrakwensamita.minutes}M ${bayrakwensamita.seconds}S kadar beklemelisin!`)
}else{
var sayı = [1, 2, 3, 4, 5, 6, 7];
var bayrak = sayı[Math.floor(Math.random() * sayı.length)];
message.channel.send(`:moneybag: **|** **${message.author.username}**, İşte günlük hediyen 🪙 **${bayrak} Coin**! \n:stopwatch: **|** Gelecek günlük ödülün: ${bayrakwensamita.hours}H ${bayrakwensamita.minutes}M ${bayrakwensamita.seconds}S`)
db.add(`coin_${message.author.id}`, bayrak)
db.set(`coinaldi_${message.author.id}`, Date.now())
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['günlük-hediye'],
  permLevel: 0
};

exports.help = {
  name: 'günlük-hediye',
  desciption: 'WenSamita Neiva',
  usage: 'Bayrak & WenSamita Neiva'
};
