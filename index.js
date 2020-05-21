const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
//const bot = new Discord.Client({disableEveryone: true});
const bot = new Discord.Client();

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`)
    //bot.user.setActivity("Hello", {type: "STREAMING", url:"https://twitch.tv/Strandable"});
})


bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hello`){
        return message.channel.send("Hello")
    }
    if(cmd === `${prefix}ping`){
        return message.channel.send("#ping")
    }

})

//bot.login(botconfig.token);
bot.login(process.env.DISCORD_BOT_TOKEN);
