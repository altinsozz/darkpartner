const Discord = require("discord.js");
const { Database } = require('npm.db');
const db = new Database("database");
const moment = require('moment')
exports.run = async (client, message, args) => {
const partner = db.fetch(`partnerlik`) || 0;let abobayraknaptınnnnnnnnnn = {"01": "Ocak","02": "Şubat","03": "Mart","04": "Nisan","05": "Mayıs","06": "Haziran","07": "Temmuz","08": "Ağustos","09": "Eylül","10": "Ekim","11": "Kasım","12": "Aralık"}
const sunucubilgiab = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(message.guild.name)
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.addField(`» Sunucu Adı`,message.guild.name, true)
.addField(`» Sunucu Sahibi`, message.guild.owner.user.tag, true)
.addField(`» Sunucu ID`, message.guild.id, true)
.addField(`» Kanal Sayısı [${message.guild.channels.cache.size}]`,`:sound: ${message.guild.channels.cache.filter(chan => chan.type === 'voice').size} | :speech_balloon: ${message.guild.channels.cache.filter(chan => chan.type === 'text').size}`, true)
.addField(`» Eklenme Tarihim`,`${moment(client.user.joinedAt).format('DD')} ${abobayraknaptınnnnnnnnnn[moment(client.user.joinedAt).format('MM')]} ${moment(client.user.joinedAt).format('YYYY h:mm:ss')}`, true)
.addField(`» Oluşturulma Tarihi`,`${moment(message.guild.createdAt).format('DD')} ${abobayraknaptınnnnnnnnnn[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`, true)
.addField(`» Katılma Tarihin`,`${moment(message.member.joinedAt).format('DD')} ${abobayraknaptınnnnnnnnnn[moment(message.member.joinedAt).format('MM')]} ${moment(message.member.joinedAt).format('YYYY h:mm:ss')}`, true)
.addField(`» Toplam Partner Sayısı`, partner)
.setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
message.channel.send(sunucubilgiab)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sb','sunucu-bilgi','sunucubilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  desciption: 'WenSamita Neiva',
  usage: 'Bayrak & WenSamita Neiva'
};
