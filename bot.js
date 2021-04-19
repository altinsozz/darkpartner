const express = require('express');
const app = express();
const http = require('http');
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 15000);

app.get("/", (request, response) => {
  response.sendStatus(200);
});


const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const Jimp = require("jimp");
const { Database } = require('npm.db')
const db = new Database('databasenpm')
const moment = require("moment");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);

    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.login(ayarlar.token);

// URL MAİN //
client.on('ready', () => {
const wenbayrak = 604800017
setInterval(() => {
  client.guilds.cache.forEach(wen => {
    const url = db.fetch(`url_${wen.id}`)
    if(!url) return;
    let süre = db.get(`1hafta_${wen.id}`)
    if(!süre) return;
    let neiva = Date.now() - süre
    if(neiva < wenbayrak) {
      db.delete(`url_${wen.id}`);
      db.delete(`1hafta_${wen.id}`)
client.channels.cache.get('id').send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
**:white_check_mark: | ${wen.name} Sunucusundaki \`${url}\` Urlsi Sıfırlandı.**
`))
}
  })
}, 5000)
});  
// URL MAİN //
