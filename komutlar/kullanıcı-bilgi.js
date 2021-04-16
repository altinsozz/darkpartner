const Discord = require("discord.js");//Bayrak & WenSamita Neiva
const { Database } = require('npm.db');//Bayrak & WenSamita Neiva
const db = new Database("database");//Bayrak & WenSamita Neiva
const moment = require('moment');//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
exports.run = async (client, message, args) => {//Bayrak & WenSamita Neiva
let üye = message.mentions.members.first() || message.member;//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
let bayraqwen = db.fetch(`coin${üye.id}`) || 0;//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
let üyesıra = db.fetch(`siraüye_${üye.id}`) || 0;//Bayrak & WenS//Bayrak & WenSamita Neivaamita Neiva
let tümsıra = db.fetch(`sıratümü_`) || 'Sıralama Yok.';//Bayrak & WenSamita Neiva
let partnersayi = db.fetch(`partnersayi_${üye.id}`) || 0;//Bayrak & WenSamita Neiva
if(moment(üye.createdAt).format('MM') === '01') {//Bayrak & WenSamita Neiva
var tarih = '';//Bayrak & WenSamita Neiva
var tarih = `${moment(üye.createdAt).format('DD')} Ocak ${moment(üye.createdAt).format('YYYY HH:mm:ss')} `//Bayrak & We//Bayrak & WenSamita NeivanSamita Neiva
}//Bayrak & WenSamita Neiva
if(moment(üye.createdAt).format('MM') === '02') {//Bayrak & WenSamita Neiva
var tarih = `${moment(üye.createdAt).format('DD')} Şubat ${moment(üye.createdAt).format('YYYY HH:mm:ss')} `//Bayrak & WenSamita Neiva
}//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
if(moment(üye.createdAt).format('MM') === '03') {//Bayrak & WenSamita Neiva
var tarih = `${moment(üye.createdAt).format('DD')} Mart ${moment(üye.createdAt).format('YYYY HH:mm:ss')} `//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
}//Bayrak & WenSamita Neiva
if(moment(üye.createdAt).format('MM') === '04') {//Bayrak & WenSamita Neiva
var tarih = `${moment(üye.createdAt).format('DD')} Nisan ${moment(üye.createdAt).format('YYYY HH:mm:ss')} `//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
}//Bayrak & WenSamita Neiva
if(moment(üye.createdAt).format('MM') === '05') {//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
var tarih = `${moment(üye.createdAt).format('DD')} Mayıs ${moment(üye.createdAt).format('YYYY HH:mm:ss')} `//Bayrak & WenSamita Neiva
}//Bayrak & WenSamita Neiva
if(moment(üye.createdAt).format('MM') === '06') {//Bayrak & WenSamita Neiva
var tarih = `${moment(üye.createdAt).format('DD')} Haziran ${moment(üye.createdAt).format('YYYY HH:mm:ss')} `//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
}//Bayrak & WenSamita Neiva
if(moment(üye.createdAt).format('MM') === '07') {//Bayrak & WenSamita Neiva
var tarih = `${moment(üye.createdAt).format('DD')} Temmuz ${moment(üye.createdAt).format('YYYY HH:mm:ss')} `//Bayrak & WenSamita Neiva
}//Bayrak & WenSamita Neiva
if(moment(üye.createdAt).format('MM') === '08') {//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
var tarih = `${moment(üye.createdAt).format('DD')} Ağustos ${moment(üye.createdAt).format('YYYY HH:mm:ss')} `//Bayrak & WenSamita Neiva
}//Bayrak & WenSamita Neiva
if(moment(üye.createdAt).format('MM') === '09') {//Bayrak & WenSamita Neiva
var tarih = `${moment(üye.createdAt).format('DD')} Eylül ${moment(üye.createdAt).format('YYYY HH:mm:ss')} `
}//Bayrak & WenSamita Neiva
if(moment(üye.createdAt).format('MM') === '10') {//Bayrak & WenSamita Neiva
var tarih = `${moment(üye.createdAt).format('DD')} Ekim ${moment(üye.createdAt).format('YYYY HH:mm:ss')} `//Bayrak & WenSamita Neiva
}
if(moment(üye.createdAt).format('MM') === '11') {//Bayrak & WenSamita Neiva
var tarih = `${moment(üye.createdAt).format('DD')} Kasım ${moment(üye.createdAt).format('YYYY HH:mm:ss')} `
}//Bayrak & WenSamita Neiva
if(moment(üye.createdAt).format('MM') === '12') {//Bayrak & WenSamita Neiva
var tarih = `${moment(üye.user.createdAt).format('DD')} Aralık ${moment(üye.createdAt).format('YYYY HH:mm:ss')} `
}//Bayrak & WenSamita Neiva
const embed = new Discord.MessageEmbed()//Bayrak & WenSamita Neiva
.setColor('RANDOM')//Bayrak & WenSamita Neiva
.setThumbnail(üye.user.avatarURL({dynamic: true}))//Bayrak & WenSamita Neiva
.setAuthor(üye.user.username, üye.user.avatarURL({dynamic: true}))//Bayrak & WenSamita Neiva
.addField(`**:bust_in_silhouette: Ad**`, `${üye.user.tag}`, true)//Bayrak & WenSamita Neiva
.addField(`**🪙 Coin**`, bayraqwen, true)//Bayrak & WenSamita Neiva
.addField(`**Sıralama**`, `${üyesıra}/${tümsıra}`, true)//Bayrak & WenSamita Neiva
.addField(`**:rosette: Durumu**`, `${üye.presence.status
          .replace("online","Çevrimiçi")//Bayrak & WenSamita Neiva
          .replace("idle","Boşta")//Bayrak & WenSamita Neiva
          .replace("dnd","Rahatsız Etmeyin")//Bayrak & WenSamita Neiva
          .replace("offline","Çevrimdışı")}`, true)//Bayrak & WenSamita Neiva
.addField(`**:video_game: Oynuyor bölümü**`, `${üye.presence.game ? üye.presence.game.name : 'Yok.'}`, true)//Bayrak & WenSamita Neiva
.addField(`**:1234: Partner sayısı**`, `${partnersayi}`, true)//Bayrak & WenSamita Neiva
.addField(`**:date: Hesabın oluşturulduğu tarih**`, `${tarih}`, true)//Bayrak & WenSamita Neiva
message.channel.send(embed);//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
exports.conf = {//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
  enabled: true,//Bayrak & WenSamita Neiva
  guildOnly: false,//Bayrak & WenSamita Neiva
  aliases: ['kullanıcı-bilgi','kullanıcıbilgi'],
  permLevel: 0//Bayrak & WenSamita Neiva
};
//Bayrak & WenSamita Neiva
exports.help = {//Bayrak & WenSamita Neiva
  name: 'kullanıcı-bilgi',
  desciption: 'WenSamita Neiva',//Bayrak & WenSamita Neiva
  usage: 'Bayrak & WenSamita Neiva'//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
