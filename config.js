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
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347043759577";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
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

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09MaEhYSUlKNnlTcVlDQWdnc01WNWxyRlJoMTZkMVlUOVM2ajdacDJYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVoyOXVnSkZCMUwvenljTFZlSm5vd01ITnQwb3R1ZDZycndrcnFvTEhnVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVS0lQYnIxZEtYeFN1T1FzTy9wN1BTbFQ3alArUHBRTUJwS0kzUEdPK1hrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqcnlZS2srcGtMOW9TKzBWQ1lnUzljallXN2JNQVkzblY2VnFTVFNUTkQwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZMdnNGSURqdHZJZUVPN1ArWmt3U1pMeDFDZUVpTEhPWk04Z1RMZGIxMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlYycThCd0R4VktGYk5Nc1d3RmJFUDRZQjkyUnh6S1ZsMExaS3NOVUtjR0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUxmbmZoelgvU1pnR3VDbWZHQXk3T3JER3Y4K2FyNzNRM3Q4R2V1cDNuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BLanZaT2k0c3hkZUJPZEYwZ0ZBd2VwY1Nqd1llL2w1N0R6Y2htbGltND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im03ZFh6akZOZlpzSVo4M282Qmx6dTg3QzFxVVNGcGdyNFpsRWVqSDRISjgvQ0E4TWZTM0NhWDQ4VENiVE1sWmFETWZLZWtMM1hYZTJGbzdkK0l1eERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6IkZXbXNoaTh2U3VPOFp1K25LSXJZVDFQeEtLZkF5VCtqS3ZLQlhzdWdnMVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlhvVmZaRTJ3VEhXOThleUhRYmg2aFEiLCJwaG9uZUlkIjoiZjkxYjgyODEtZWJiYS00YzMzLWJkZjItZDQxNmM4YTM1Zjk2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE2ZmlkbFg3T1FzYk9mWGl4cmxNTTRBbitSUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1Z3JSbm1wRHB6SnBLWUJrNU41Qy81Y2h1V1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0wzTktGUlQiLCJtZSI6eyJpZCI6IjIzNDcwNDU1MDUwOTY6ODRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xmWjRyRUZFTnFpd2JRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpjT0ZZQk04NHQyUng3c0tQRnZjSHQ4ZlNSUXZBc0ZpMWw1OXdvTDB1bFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpjWTJDNjJlNlRnenh1RGZKUkE2NXlZVTB3VzJENGdQWHZyV3lsNnNpWWs1NzRKWnp3M0U1TGZPeFpPNVBaVVp6b3BzN2h4bFkvM1poOE80ejhMdUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWckk1dllTYXVTZ3MvRVZMM0xSUmdDYWljSm1xamNPbGVVakQrT2tab1lSQWQvcjNMNFpHd0UySWNhc0V3WXdNMzhVWFRuZGUxamZnV1g2aGtxb1VCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDU1MDUwOTY6ODRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1hEaFdBVFBPTGRrY2U3Q2p4YjNCN2ZIMGtVTHdMQll0WmVmY0tDOUxwVSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDczNDA1NH0="
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09MaEhYSUlKNnlTcVlDQWdnc01WNWxyRlJoMTZkMVlUOVM2ajdacDJYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVoyOXVnSkZCMUwvenljTFZlSm5vd01ITnQwb3R1ZDZycndrcnFvTEhnVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVS0lQYnIxZEtYeFN1T1FzTy9wN1BTbFQ3alArUHBRTUJwS0kzUEdPK1hrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqcnlZS2srcGtMOW9TKzBWQ1lnUzljallXN2JNQVkzblY2VnFTVFNUTkQwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZMdnNGSURqdHZJZUVPN1ArWmt3U1pMeDFDZUVpTEhPWk04Z1RMZGIxMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlYycThCd0R4VktGYk5Nc1d3RmJFUDRZQjkyUnh6S1ZsMExaS3NOVUtjR0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUxmbmZoelgvU1pnR3VDbWZHQXk3T3JER3Y4K2FyNzNRM3Q4R2V1cDNuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BLanZaT2k0c3hkZUJPZEYwZ0ZBd2VwY1Nqd1llL2w1N0R6Y2htbGltND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im03ZFh6akZOZlpzSVo4M282Qmx6dTg3QzFxVVNGcGdyNFpsRWVqSDRISjgvQ0E4TWZTM0NhWDQ4VENiVE1sWmFETWZLZWtMM1hYZTJGbzdkK0l1eERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6IkZXbXNoaTh2U3VPOFp1K25LSXJZVDFQeEtLZkF5VCtqS3ZLQlhzdWdnMVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlhvVmZaRTJ3VEhXOThleUhRYmg2aFEiLCJwaG9uZUlkIjoiZjkxYjgyODEtZWJiYS00YzMzLWJkZjItZDQxNmM4YTM1Zjk2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE2ZmlkbFg3T1FzYk9mWGl4cmxNTTRBbitSUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1Z3JSbm1wRHB6SnBLWUJrNU41Qy81Y2h1V1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0wzTktGUlQiLCJtZSI6eyJpZCI6IjIzNDcwNDU1MDUwOTY6ODRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xmWjRyRUZFTnFpd2JRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpjT0ZZQk04NHQyUng3c0tQRnZjSHQ4ZlNSUXZBc0ZpMWw1OXdvTDB1bFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpjWTJDNjJlNlRnenh1RGZKUkE2NXlZVTB3VzJENGdQWHZyV3lsNnNpWWs1NzRKWnp3M0U1TGZPeFpPNVBaVVp6b3BzN2h4bFkvM1poOE80ejhMdUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWckk1dllTYXVTZ3MvRVZMM0xSUmdDYWljSm1xamNPbGVVakQrT2tab1lSQWQvcjNMNFpHd0UySWNhc0V3WXdNMzhVWFRuZGUxamZnV1g2aGtxb1VCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDU1MDUwOTY6ODRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1hEaFdBVFBPTGRrY2U3Q2p4YjNCN2ZIMGtVTHdMQll0WmVmY0tDOUxwVSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDczNDA1NH0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "?",
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
