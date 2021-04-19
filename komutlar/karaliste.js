const Discord = require("discord.js");
const { Database } = require("npm.db");
const db = new Database("database");
const moment = require("moment");
exports.run = async (client, message, args) => {
if(message.author.id !== '699597747657113653') if(message.author.id !== '548145246983159808') return;
  const kara = args[0]; 
  const user =
    message.mentions.users.first() || client.users.cache.get(args[1]);
  const sebep = args.slice(2).join(" ");
  if (kara == "al") {
    if (!user)
      return message.channel.send("Bir üye etiketleyin ya da ID girin.");
    if (!sebep) return message.channel.send("Sebep Belirtin.");
    db.set(`karasüre_${user.id}`, Date.now());
    db.set(`karaalan_${user.id}`, message.author.id);
    db.set(`kara_${user.id}`, sebep);
    return message.channel
      .send(
        `**\`${user.tag}\` Kullanıcısı \`${sebep}\` sebebinden karalisteye alındı.**`
      )
      .then(
        client.channels.cache
          .get("id")
          .send(
            `**\`${user.tag}\` Kullanıcısı \`${sebep}\` sebebinden karalisteye alındı.**`
          )
      );
  } else if (kara == "çıkar") {
    if (!user)
      return message.channel.send("Bir üye etiketleyin ya da ID girin.");
    if (!db.get(`kara_${user.id}`))
      return message.reply("Bu kullanıcı zaten karalistede değil!");
    let aylartoplam = {
      "01": "Ocak",
      "02": "Şubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "Mayıs",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "Ağustos",
      "09": "Eylül",
      "10": "Ekim",
      "11": "Kasım",
      "12": "Aralık"
    };
    let aylar = aylartoplam;
    let rol = "";

    require("moment-duration-format");
    let wensj = db.get(`karasüre_${user.id}`);
    const duration = moment
      .duration(Date.now() - wensj)
      .format(" D [gün], H [saat], m [dakika], s [saniye]");

    return embed(`
**:question: | Karalisteden çıkartmak istediğinize emin misiniz**

> Sebep: \`${db.get(`kara_${user.id}`)}\`
> Kara Listeye Alan: \`${db.get(`karaalan_${user.id}`)}\`
> Kara Listeye Alınma Tarihi: \`${moment(wensj).format("DD")} ${
      aylar[moment(wensj).format("MM")]
    } ${moment(wensj).format("YYYY HH:mm:ss")}\`
> Kara Listede Geçen Süre: \`${duration}\`
    `).then(async wenbayrak => {
      await wenbayrak.react("✅");
      await wenbayrak.react("❌");
      const filter = (reaction, user) => {
        return (
          ["✅", "❌"].includes(reaction.emoji.name) &&
          user.id === message.author.id
        );
      };

      wenbayrak
        .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
        .then(collected => {
          const reaction = collected.first();

          if (reaction.emoji.name === "✅") {
            db.delete(`kara_${user.id}`);
            let bayrakwenqwe = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setAuthor(message.author.tag)
              .setThumbnail(client.user.avatarURL())
              .setDescription(`${user.tag} Karalisteden çıkartıldı!`);
            wenbayrak.edit(bayrakwenqwe);
          } else {
            let bayrakwenqwe = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setAuthor(message.author.tag)
              .setThumbnail(client.user.avatarURL())
              .setDescription(`İşlem iptal edildi!`);
            wenbayrak.edit(bayrakwenqwe);
          }
        })
        .catch(err => {
          let bayrakwenqwe = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(message.author.tag)
            .setThumbnail(client.user.avatarURL())
            .setDescription(`İşlem iptal edildi!`);
          wenbayrak.edit(bayrakwenqwe);
        });
    });
  } else {
    return message.reply("Geçersiz argüman! Argümanlar: `al` `çıkar`");
  }
  async function embed(text) {
    //Bayrak & WenSamita Neiva
    const embed = new Discord.MessageEmbed() //Bayrak & WenSamita Neiva
      .setColor("BLUE") //Bayrak & WenSamita Neiva
      .setThumbnail(message.author.avatarURL({ dynamic: true }))
      .setAuthor(
        //Bayrak & WenSamita Neiva
        message.author.tag, //Bayrak & WenSamita Neiva
        message.author.avatarURL({ dynamic: true }) //Bayrak & WenSamita Neiva
      ) //Bayrak & WenSamita Neiva
      .setDescription(`${text}`) //Bayrak & WenSamita Neiva
      .setTimestamp() //Bayrak & WenSamita Neiva
      .setFooter(client.user.username, client.user.avatarURL()); //Bayrak & WenSamita Neiva
    let msg = await message.channel.send(embed); //Bayrak & WenSamita Neiva
    return msg; //Bayrak & WenSamita Neiva
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["karaliste", "kara-liste"],
  permLevel: "BOT_OWNER"
};

exports.help = {
  name: "karaliste",
  desciption: "WenSamita Neiva",
  usage: "Bayrak & WenSamita Neiva"
};
