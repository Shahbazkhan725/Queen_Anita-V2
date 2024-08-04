//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "923252829640";
global.owner = process.env.OWNER_NUMBER || "923252829640";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUlpTGNoNHd3amtqT1Q3R1hVMXFDNHRxd09XNVNCZHJWOEJtNi9yc0hubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFp1b0VMZzh2SVhIU2QwenpuMDBHREZXNVRXTE1ZSGVTYVFhU25EWEVnVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQ1Mxd0dOTCt6OHppeEpCRWZnRFJzQ3orUjB0eThtSXJiNzNZTU5NeG1BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyb1BrTHBzSHlJZXFYeWE1dDBHb3UyMjUwWjZLV0ZhSFJ2MmdkTS9UeEc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1MVjhjT21SMXdLdTM3VFFDRkZOY1VTS1JqUDNGT3FlYXRGWmtnK0I4a0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5ad3Zzb3RkYy9ubndEU3B0OXg0aDAvc2JtNW1HNkdocTM3UDJaYloxam89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0c3bkM3MmYwZ2J6UjFGVzdjTGhpRVQ5ZFBXdWJidkdzQkdNSG5EUW9IST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVozd2NRZFd0dkFFcDhrWVo1NVBlSHZiQjc0Rm5JR2k1ZDVxb20rVCtUaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii94KzhDaVludGNqY0hlM0w5RlFDbURTZ2xVSkNoOWhWQnpGcWtjc2N2L202b0pLanc3UXoray9GRXZEcXI5QmMvdTFqbDhrUHhyMXVsRWgybkI3b2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI4LCJhZHZTZWNyZXRLZXkiOiJ6ZmxqUUFTRFdNYVd1UElWSHRFRHBLbXY1cEVEbU13TDBST3J3aWwyeng4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyVjJZREVHc1JQS09iYnE0WnlvdUx3IiwicGhvbmVJZCI6ImUyNWU4NzI2LTBiMDktNGNiNy1iYWY4LTMxMjA3NzEwNWY4YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVc1c5eFk0aGY4djN1NDdiTTJXS0wvSE9uRU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlA4cWk2cll5T0NRclluTzJyM1lhazk5MllZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllSM0U3TVE4IiwibWUiOnsiaWQiOiI5MjMyNTI4Mjk2NDA6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJyYWphIHNob290ZXIgMzAyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPNyt0cFVCRUlIL3U3VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpdnN4U2xkckhTT3VmK2ZzcG9GVU1ockNMaE85SytMcks1VFF4VktMZkEwPSIsImFjY291bnRTaWduYXR1cmUiOiJNdWNzODhHOHhDVDdEU0h5b0xqZ0R3SXRobFQ0dUttUFExc21jR29aNE9OaE91VmJHUlJQV1Q2NTJQVFJJRlMxTUpJNFFnbVJlZGlhZGdRUVRMYlRDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieTZtUGNKOTg5OWJXa2NmWnZGMEtxRm0xV1VwWmhMcmkzRlV1NUtTVjlxdlFaYTl5SXhhTmtRZDNqdllLand3WEpEU1lDc0pib2ZBMGFrN24zM1Q4akE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyNTI4Mjk2NDA6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZcjdNVXBYYXgwanJuL243S2FCVkRJYXdpNFR2U3ZpNnl1VTBNVlNpM3dOIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNzQ0NzE4fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
