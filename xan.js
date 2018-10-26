const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}`); 
	client.user.setActivity('X4N', { type: 'STREAMING', url: "https://www.twitch.tv/p/assets/main.js"});
});


client.login(config.token);