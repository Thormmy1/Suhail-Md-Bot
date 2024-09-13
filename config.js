const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347044165711";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_15_34_09_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU5LFxuICAgICAgICA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDc3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY2LFxuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzLFxuICAgICAgICA4MixcbiAgICAgICAgODYsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0LFxuICAgICAgICA5OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTit5WHR0U2E1UHNxakd0S3hZNktJelY3cUROWHRmMXBOY3lnN3NQYTJvRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZDBfQlgyeWVTUk9IVXZKTGY5YXpRUVwiLFxuICBcInBob25lSWRcIjogXCIxNjYxNDliMS1jMWE3LTQ0ZmUtYjgyMy1lOGYzZDFmOTVlODZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgNDQsXG4gICAgICAyMCxcbiAgICAgIDMsXG4gICAgICA0MCxcbiAgICAgIDIyNCxcbiAgICAgIDE0NixcbiAgICAgIDE2MCxcbiAgICAgIDE0OCxcbiAgICAgIDEwNCxcbiAgICAgIDMwLFxuICAgICAgMjQ5LFxuICAgICAgMjMyLFxuICAgICAgMTY1LFxuICAgICAgMTYyLFxuICAgICAgNTIsXG4gICAgICAxMzAsXG4gICAgICAxNzMsXG4gICAgICAzNCxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NixcbiAgICAgIDI1MyxcbiAgICAgIDE5LFxuICAgICAgMjM4LFxuICAgICAgMTIxLFxuICAgICAgMTg4LFxuICAgICAgODQsXG4gICAgICAyNDYsXG4gICAgICAyMTAsXG4gICAgICA3NixcbiAgICAgIDUzLFxuICAgICAgMzUsXG4gICAgICAxMTksXG4gICAgICAxNjAsXG4gICAgICAzMCxcbiAgICAgIDExNCxcbiAgICAgIDE4NyxcbiAgICAgIDMyLFxuICAgICAgMjIsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVhGNDEyOFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDQxNjU3MTE6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRyIERhdmlkXCIsXG4gICAgXCJsaWRcIjogXCIyNDQwNzQ4MjA5Mzk4MDc6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMRGo0NzhERVBlMmtiY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZuL3lVNTNRNG1mZlJHWTBhU29CRTFkQmdGdG5ER2ozWFdxeFRLdW4zQlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ1VSbnlKaWw1K3Y2MVNHY1phcnJnTmRnVFNXTWkzNkpUTTM4V2RNNjlSOWtSODFONzhxUkRBdFRXNGxrTUFTdDUxbFVjQkRvS0NFT1ZwWXMvMW1YQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRitDYjdSR203SEJxMFJUcGk0aXIvWW1kS0I0R0lNd3lRRkkvNWV6TEpqT2VuNTN5SXV0QnlZUUVONGcvODZHcUpNUVB6RnN1b2dBSTdkYkFaWXJBQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NDE2NTcxMTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjI0MTY1OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
