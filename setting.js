/* SC THOMZ V8
BASE : HW MODS
RECODE : HANSZZZMODS
CREACOT : HANSZZZMODS
*/

const fs = require('fs')
const chalk = require('chalk')

global.owner = "6285771598591","082125214084"
global.namabot = "starkz push"
global.botname = "starkz push"
global.autoJoin = false
global.codeInvite = "Fa8u2v4MjSlGCZ2Nw1QYSS"
global.thumb = fs.readFileSync("./thumb.png")
global.sessionName = 'starkz' //Gausah Juga
global.bugstarkz = fs.readFileSync("./bugstarkz.png")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker by starkz-dev BOT"

global.namastore = "starkz store"
global.nodana = "082125214084"
global.nogopay = "082125214084"
global.noovo = "082125214084"

global.domain = 'https://rizalzee.pannelkuu.biz.id' // Isi Domain Lu
global.apikey = 'ptla_mSZyPMxLiijDK4irNWbAPJkeerJGZwJNPOyCZDvA9Is' // Isi Apikey Plta Lu
global.capikey = 'ptlc_3ZKgId1TUIzv4ks7yQSRXWgeK3LFcqmC7sl2eH3svrR' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.antilink = false

const mess = {
   wait: "Tunggu Bang Lagi Saya Proses",
   success: "sukses✅ tuankuu",
   save: "𝕊𝕌𝕂𝕊𝔼𝕊 𝕊𝔸𝕍𝔼 ℕ𝕆𝕄𝔼ℝ 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Kak?",
       link: "Link Nya Mana Kak?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Fitur Nya Cuman Bisa Di Dalem Grup Yah Bang",
       private: "Di Chat Pribadi Bang Starkz Biar Bisa Di Pake",
       owner: "Ga Usah Pake Fitur Ini Asu Lu Bukan Bang",
       admin: "Ga Usah Pake Fitur Ini Asu Lu Bukan Bang",
       badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})