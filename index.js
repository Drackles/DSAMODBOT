const prefix = process.env.PREFIX;
const fs = require("fs");
const { Collection, Client } = require("discord.js");

const client = new Client();//youtube.com/NoblesYT
client.commands = new Collection();//youtube.com/NoblesYT
client.queue = new Map()


//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {//youtube.com/NoblesYT
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));//youtube.com/NoblesYT
    console.log("Event Yükleniyor: "+eventName)
  });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {//youtube.com/NoblesYT
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);//youtube.com/NoblesYT
    console.log("Komut Yükleniyor: "+commandName)
  });
});

//youtube.com/NoblesYT
client.login(process.env.TOKEN)

async function RadioRepeater() {//hamzamertakbaba#3575
  let Channel = client.channels.cache.get("1002528780289585162");
  var streamURL = "https://azura.citradio.net/radio/8000/radio";
  if(!Channel) return;
   await Channel.leave();
   Channel.join().then(connection => {
    const dispatcher = connection.play(streamURL);
    dispatcher.setVolume(100/100) //Radyonun sesini ayarlarsınız. Değiştirmek isterseniz en soldakini değiştirin. Örnek olarak: dispatcher.setVolume(50/100)

});
};

client.on('ready', () => {//FORZA XD#3575
  RadioRepeater()
  setInterval(RadioRepeater, Math.max(3600000))
  let Channel = client.channels.cache.get("1002528780289585162")
  if(!Channel) return;
    var streamURL = "https://azura.citradio.net/radio/8000/radio";
     
    
           Channel.join().then(connection => {
              const dispatcher = connection.play(streamURL);
              dispatcher.setVolume(100/100) //Radyonun sesini ayarlarsınız. Değiştirmek isterseniz en soldakini değiştirin. Örnek olarak: dispatcher.setVolume(50/100)
      
          });
  });
