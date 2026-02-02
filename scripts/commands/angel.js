const fs = require('fs-extra');
const path = require('path');
const statePath = path.join(__dirname, 'angel_state.json');

module.exports.config = {
  name: "angel",
  version: "1.1.0",
  hasPermission: 1,
  credits: "you",
  description: "Send hello periodically, survives restarts",
  category: "admin",
  prefix: true,
  usages: "!angel [stop]",
  cooldowns: 5
};

module.exports.onLoad = async function ({ api }) {
    if (!fs.existsSync(statePath)) return;
    try {
        const state = await fs.readJson(statePath);
        if (state.active && state.threadID) {
            console.log(`[ANGEL] Resuming for thread ${state.threadID}`);
            startAngel(api, state.threadID);
        }
    } catch (e) {
        console.error("[ANGEL] Error loading state:", e);
    }
};

function startAngel(api, threadID) {
    if (global.angelIntervals && global.angelIntervals[threadID]) {
        clearInterval(global.angelIntervals[threadID]);
    }
    if (!global.angelIntervals) global.angelIntervals = {};

    global.angelIntervals[threadID] = setInterval(async () => {
        try {
            await api.sendMessage("𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ, 𝗫. 𖠄⃪͜͡🌪ـ, 𝗤. 𖤛⃪͜͡🌪ـ,", threadID);
        } catch (e) { console.error(e); }
    }, 30000);
}

module.exports.run = async function ({ api, event, args }) {
  const { threadID, senderID } = event;
  const admins = global.config.ADMINBOT.map(String);
  if (!admins.includes(String(senderID))) return api.sendMessage("❌ Admins only.", threadID);

  if (args[0] === "stop") {
      if (global.angelIntervals && global.angelIntervals[threadID]) {
          clearInterval(global.angelIntervals[threadID]);
          delete global.angelIntervals[threadID];
      }
      await fs.writeJson(statePath, { active: false });
      return api.sendMessage("Angel Engine stopped ⏹️.", threadID);
  }

  await fs.writeJson(statePath, { active: true, threadID: threadID });
  startAngel(api, threadID);
  api.sendMessage("Angel Engine is active ✅ (Persisted).", threadID);
};