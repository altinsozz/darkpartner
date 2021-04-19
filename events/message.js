const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const { Database } = require('npm.db')
const db = new Database("database")
module.exports = async message => {
  let client = message.client;
  let prefix = ayarlar.prefix;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);

  let cmd;

  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  } //yardım menüsünü sana kitliyorum
  if (cmd) {   
    if(cmd.conf.permLevel == "BOT_OWNER") if(!ayarlar.sahip.includes(message.author.id)) return;
    if(cmd.conf.permLevel !== 0) if(cmd.conf.permLevel !== "BOT_OWNER") if(!message.member.hasPermission(cmd.conf.permLevel)) return;
    
    let kara = db.get(`kara_${message.author.id}`);
    let karalistealan = db.get(`karaalan_${message.author.id}`)
    if (kara) {
      const hataembed = new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail('https://cdn.discordapp.com/avatars/770299344250339349/33a7ed25f2ae50e305dfad6244086142.webp')
        .setAuthor('KOMUTLARI KULLANAMAZSINIZ!')
        .setImage('https://cdn.discordapp.com/attachments/816981794917187584/817744432572399646/Baslksz-2.jpg')
        .setDescription(`
Üzgünüm Ancak Komutları Kullanamazsınız!
\`${client.users.cache.get(karalistealan).tag}\` Tarafından **${kara}** Sebebiyle Komutları Kullanmanız Yasaklandı!.

Detaylar İçin [Tıkla!](https://discord.gg/sBGxGhcFG4)`)//ab intentleri ac kapalı
      .setFooter(`${client  .user.username}'den Engellendiniz.`)
      message.channel.send(hataembed);
      return;  
    }
    cmd.run(client, message, params);
  } //npm.dbli olcak kardesim
};
