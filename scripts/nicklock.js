// تخزين القفل عالميًا
if (!global.groupNickLocks) global.groupNickLocks = new Map();

module.exports.config = {
  name: "كنيات",
  version: "1.0.0",
  permission: 1,
  credits: "IMRAN",
  description: "Lock all group nicknames slowly",
  prefix: true,
  category: "admin",
  usages: "!كنيات تشغيل [الكنية] | !كنيات ايقاف",
  cooldowns: 5,
  premium: false,
  dependencies: {}
};

// متغيرات تحكم
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function startNickLoop(api, threadID) {
  while (global.groupNickLocks.has(threadID)) {
    try {
      const info = await api.getThreadInfo(threadID);
      const members = info.participantIDs;
      const nickName = global.groupNickLocks.get(threadID);

      for (const userID of members) {
        if (!global.groupNickLocks.has(threadID)) return;

        const currentNick = info.nicknames?.[userID];

        // لا يغير إلا إذا مختلف
        if (currentNick !== nickName) {
          try {
            await api.changeNickname(nickName, threadID, userID);
            await sleep(5000); // ⏱️ 5 ثواني
          } catch (e) {
            await sleep(5000);
          }
        }
      }
    } catch (e) {
      await sleep(10000);
    }
  }
}

module.exports.run = async ({ api, event, args }) => {
  const threadID = event.threadID;
  const senderID = event.senderID;

  const botAdmins = [
    ...(global.config.ADMINBOT || []),
    ...(global.config.OPERATOR || []),
    ...(global.config.OWNER || [])
  ].map(String);

  if (!botAdmins.includes(String(senderID))) {
    return api.sendMessage("❌ هذا الأمر مخصص للأدمن فقط.", threadID);
  }

  const action = args[0];

  // 🛑 !كنيات ايقاف
  if (action === "ايقاف") {
    if (!global.groupNickLocks.has(threadID)) {
      return api.sendMessage("⚠️ قفل الكنيات غير مفعل.", threadID);
    }

    global.groupNickLocks.delete(threadID);
    return api.sendMessage("🔓 تم إيقاف قفل كنيات الأعضاء.", threadID);
  }

  // ▶️ !كنيات تشغيل [الكنية]
  if (action === "تشغيل") {
    const nickname = args.slice(1).join(" ");
    if (!nickname) {
      return api.sendMessage(
        "⚠️ الاستعمال:\n!كنيات تشغيل [الكنية]",
        threadID
      );
    }

    if (global.groupNickLocks.has(threadID)) {
      return api.sendMessage("⚠️ قفل الكنيات مفعل بالفعل.", threadID);
    }

    global.groupNickLocks.set(threadID, nickname);
    api.sendMessage(🔒 تم تفعيل قفل الكنيات:\n${nickname}, threadID);

    startNickLoop(api, threadID);
    return;
  }

  // ❓ أمر غير صحيح
  api.sendMessage(
    "⚠️ الاستعمال الصحيح:\n!كنيات تشغيل [الكنية]\n!كنيات ايقاف",
    threadID
  );
};