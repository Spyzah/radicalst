const { Events, Discord } = require("discord.js");
const gamedig = require("gamedig");

module.exports = {
  name: Events.ClientReady,
  once: true,
  
  async execute(client, config) {
    console.log(`${client.user.tag} HAZIR.`)
    
    const server = config.server;
  
    setInterval(async function playersUpdate() {
      const samp = await gamedig.query({
        type: "fivem",
        host: server.ip || "Spy Marketim",
        port: server.port || "30120",
      });
      

      client.user.setPresence({ activities: [{ name: `Spy Marketim` }], status: "dnd"});
    }, config.duration)
  }
}