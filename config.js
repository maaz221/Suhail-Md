const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_00_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDgwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgODcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICA1NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NixcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDUxLFxuICAgICAgICA2NixcbiAgICAgICAgODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDk3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA5NixcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY4LFxuICAgICAgICA2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA4LFxuICAgICAgICA3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDk5LFxuICAgICAgICA3NCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDU4LFxuICAgICAgICAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxODksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1LFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDg0LFxuICAgICAgICAxODQsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1MTJSc0hHL2pMZ0lRTktzTkJBREsvS3ZURTlDcEJLK1BBLzNVN2tjV3RZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE3ODY3OTEwODQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMDNBQTAyQ0IxOTc4QjJENkRFREVEQTEyNjY0RjIwRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0MzQ0MzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNzg2NzkxMDg0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkQxRTg4QjRDRTdDMzQ2MkM1Njg1QTIwM0RDODExQ0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNDM0NDMyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTc4Njc5MTA4NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI3RkQ0RUJFMTdDMDdBMDc5RERDRTJFMTZFNjIzQjFBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjQzNDQzNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE3ODY3OTEwODQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0N0MwOTg5NjI0NjJGMkUzREYyOEUzMDI3RjU0NTM1QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0MzQ0MzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM2FSS09XME1RdEtlUUs0cTQxLVJLZ1wiLFxuICBcInBob25lSWRcIjogXCI4ODcwNzAyMy05MTE2LTRkZTYtYmY3YS0wOTA5MDA5MTUxOTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgMjEyLFxuICAgICAgMjM4LFxuICAgICAgNDQsXG4gICAgICA0OCxcbiAgICAgIDUsXG4gICAgICAxOTIsXG4gICAgICA2NyxcbiAgICAgIDI1MSxcbiAgICAgIDMwLFxuICAgICAgNzIsXG4gICAgICAxOTQsXG4gICAgICAxMDAsXG4gICAgICA4NCxcbiAgICAgIDEzOSxcbiAgICAgIDEyMixcbiAgICAgIDEyMCxcbiAgICAgIDEzMyxcbiAgICAgIDY0LFxuICAgICAgODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDIwMCxcbiAgICAgIDIyMCxcbiAgICAgIDIwMixcbiAgICAgIDE3NCxcbiAgICAgIDIxNSxcbiAgICAgIDg2LFxuICAgICAgMTMyLFxuICAgICAgMTExLFxuICAgICAgMTY0LFxuICAgICAgMTM1LFxuICAgICAgMjIsXG4gICAgICAxNzAsXG4gICAgICAyMjMsXG4gICAgICAxNDksXG4gICAgICA5MixcbiAgICAgIDIxOSxcbiAgICAgIDI1MixcbiAgICAgIDE5NCxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lPQW9jUURFUHVHcWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiancyVEVlelRKWnU1MzM3UmpJbG11ZHNnbWRxbFlRZ3UrWHJyYzY4Uk94dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmUHh5OWNUemU0WXRpRE01Y2dHeDhUV2lMY2FtM0doY0w2SmpWMmRJM3kzTTdzczFKdDN2NXJaUWRBYjNoY28xN0JmWGtMZitnYnQyRXNrQ3Zwd2pCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDQm5uUVhzT2tqUDM2VmFCNU96NC9nbjNJMlN1KzQyL1AxbmhMcnBGQkZVS2JaOGhYaDMzd3haT01jVENpcHVqRk9ydWdlQm0wVVR3Ulgxbkp6NDhEUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE3ODY3OTEwODQ2OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiYm90XCIsXG4gICAgXCJsaWRcIjogXCIyMzU2MTgwOTc0OTIxNTA6MjNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxNzg2NzkxMDg0NjoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0MzQ0MzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOdElcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU50SS5qc29uIjogIntcImtleURhdGFcIjpcIm4rQ3Vpd3pWVisrLzZDUVZla05xYTlGeXl3NEkzNTdJbldiMWpqSFJHMFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTQ4NDUzMzc5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI0MzQ0MzEyMjBcIn0iCn0="  // PUT your SESSION_ID 


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
