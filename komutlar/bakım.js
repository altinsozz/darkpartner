const Discord = require("discord.js");
const { Database } = require("npm.db");
const db = new Database("database");
const moment = require("moment");
exports.run = async (client, message, args) => {
if(message.author.id !== '699597747657113653') if(message.author.id !== '548145246983159808') return;
  const bakımaldıkabooooo = args[0];
  const sebep = args.slice(1).join(" ");
  if (bakımaldıkabooooo == "al") {
    if (!sebep) return message.channel.send("Sebep Belirtin.");
    db.set(`bakımsüre_`, Date.now());
    db.set(`bakımalan_`, message.author.id);
    db.set(`bakım_`, sebep);
    return message.channel
      .send(
        `Bakım açıldı ab.`
      )
  } else if (bakımaldıkabooooo == "çıkar") {

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
    let wensj = db.get(`bakımsüre_`);
    const duration = moment
      .duration(Date.now() - wensj)
      .format(" D [gün], H [saat], m [dakika], s [saniye]");

    return embed(`
**:question: | Bakımdan çıkartmak istediğinize emin misiniz**

> Sebep: \`${db.get(`bakım_`)}\`
> Bakıma Alan: \`${db.get(`bakımalan_`)}\`
> Bakıma Alınma Tarihi: \`${moment(wensj).format("DD")} ${
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
            let bayrakwenqwe = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setAuthor(message.author.tag)
              .setThumbnail(client.user.avatarURL())
              .setDescription(`Bakım Kapandı!`);
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
  aliases: ["bakım"],
  permLevel: "BOT_OWNER"
};

exports.help = {
  name: "bakım",
  desciption: "WenSamita Neiva",
  usage: "Bayrak & WenSamita Neiva"
};
