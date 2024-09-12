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

  sessionName:process.env.SESSION_ID || "SUHAIL_08_37_09_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDU5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMzLFxuICAgICAgICA5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQzLFxuICAgICAgICA1NixcbiAgICAgICAgMzksXG4gICAgICAgIDQyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA1LFxuICAgICAgICA5OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU3LFxuICAgICAgICA1OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICA1NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDc2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMixcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiemowcnU0MXo1c1d3b3FuSzh4QnB0YnpuOTNjejgwczMrdXVQWG9zdjA5RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUkdMN2pKYWNTcDY0QUJIRURhVHRPQVwiLFxuICBcInBob25lSWRcIjogXCI3NmVlNGNlMS03M2U1LTRkZTgtODVhYy0zYTUzZTIxYjgzM2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgMjUsXG4gICAgICAxOTAsXG4gICAgICA2MCxcbiAgICAgIDI0NSxcbiAgICAgIDI0LFxuICAgICAgMTk0LFxuICAgICAgNzAsXG4gICAgICAzNyxcbiAgICAgIDIwMCxcbiAgICAgIDkxLFxuICAgICAgMTQ3LFxuICAgICAgNzAsXG4gICAgICAxNDIsXG4gICAgICAxOTEsXG4gICAgICAxNzAsXG4gICAgICAxODYsXG4gICAgICAxNjQsXG4gICAgICAyNTMsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICA1NSxcbiAgICAgIDE1NixcbiAgICAgIDIyNyxcbiAgICAgIDIxLFxuICAgICAgMjA5LFxuICAgICAgMjUwLFxuICAgICAgMTc5LFxuICAgICAgMjksXG4gICAgICAxOTcsXG4gICAgICAyMTgsXG4gICAgICA4LFxuICAgICAgMzMsXG4gICAgICA5MCxcbiAgICAgIDEwNyxcbiAgICAgIDIwNixcbiAgICAgIDE0OSxcbiAgICAgIDEzMixcbiAgICAgIDE1MyxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOQVNEWEI2QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NDE2NTcxMTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRHIgRGF2aWRcIixcbiAgICBcImxpZFwiOiBcIjI0NDA3NDgyMDkzOTgwNzozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tyajQ3OERFTTNRaXJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZm4veVU1M1E0bWZmUkdZMGFTb0JFMWRCZ0Z0bkRHajNYV3F4VEt1bjNCWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvVlFaYXBVSUVaOENmK1dGbHVERTB6WGdYaHkxMEJ1cjN6VXNaSSs0WFJtQ1BYbTdINmFwMlphbVFFRS9oZW9iZjF0RFhycHRTVzQ0QnMzZXJ3R3pEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBdTRkbVhxV0lWRkVKeDRvcXZuUml0V2lXRXRISS9veXdhRUhIQk5VVkcvM2lyTW1qTlpiRVVZZ2pBVlgyL1J5WXloSkY1cDluOFplNlhici9HemRCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQ0MTY1NzExOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2MTMwMjU5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
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
 
