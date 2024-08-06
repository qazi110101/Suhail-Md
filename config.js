const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://qazi:muhammadshaheer1.@cluster0.9n4ay5e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_59_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEwLFxuICAgICAgICA0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMjAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA5NixcbiAgICAgICAgODIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDkyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDg0LFxuICAgICAgICA3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODksXG4gICAgICAgIDgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMixcbiAgICAgICAgNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImRWS2RSMHBUbGZUMVM3WEhUa1hJL1Z5a21jNXMyVDZ4ODFBNUw5TTZGM0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzE5MTk4MzIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENEMyRDUyQTk2QUY3RjgwOURFN0E5MDM0MjcwRDJBMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI5NDE5NjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMG5QeEE3Y2VSV0NiQjlMWTFudl93Z1wiLFxuICBcInBob25lSWRcIjogXCJhZWNmYzhlNy1iNWIxLTRhMjEtOTc1NS0xZTBiNmE2ZGMyOWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMTY0LFxuICAgICAgMjE2LFxuICAgICAgMjIwLFxuICAgICAgMTk2LFxuICAgICAgMTUyLFxuICAgICAgMjMyLFxuICAgICAgNTAsXG4gICAgICAxNTIsXG4gICAgICAxNTksXG4gICAgICAxNjMsXG4gICAgICAxNTcsXG4gICAgICA0MSxcbiAgICAgIDM1LFxuICAgICAgMjM1LFxuICAgICAgMzUsXG4gICAgICAyNDMsXG4gICAgICAyNSxcbiAgICAgIDIsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgMjMwLFxuICAgICAgNyxcbiAgICAgIDE5OSxcbiAgICAgIDE3MCxcbiAgICAgIDg4LFxuICAgICAgMjQ2LFxuICAgICAgODAsXG4gICAgICAyMzAsXG4gICAgICAxMzcsXG4gICAgICA1OSxcbiAgICAgIDc5LFxuICAgICAgMTM2LFxuICAgICAgMTk5LFxuICAgICAgMTQ5LFxuICAgICAgMzgsXG4gICAgICAxMzUsXG4gICAgICAxMyxcbiAgICAgIDEyMyxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKSjZXU0U3UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzE5MTk4MzIxOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZsvCdmpjwnZqN8J2ajiDwnZmy8J2am/CdmorwnZqM8J2alPCdmo7wnZqbXCIsXG4gICAgXCJsaWRcIjogXCIxNzY4NjI4OTQ0OTc4MTM6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmFLbmVJR0VJR0V5TFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVVXhCLzVQNHpxV1FRTDAweWZaQURxY2hPSjY3WGIrejArTnBEdFFmVDJjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpLRmhWV3V2TUI1UXJVVlRzbGszVTFXWVhBM0RPVmlxb2lMK1cxZUY2MVZxeXc5MnhoVkZnbVpOM1NiZlE2eXM0N1ZGMEpnUnFBY3M5bEErdll5NkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJGWndONFd0QUJOZm1XOFBhTmZpSFlPVXMvbHNyZGExN25wNnMvbExyR0Z3WjAwcm9zQ0kxcXQ3NmRzN1lmcS9EY0JRMDdBcHZZMUxCTHJuV0ZkVEN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxOTE5ODMyMToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTQxOTU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjYvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCNi8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
