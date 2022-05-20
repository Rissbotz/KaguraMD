const fs = require('fs')
const chalk = require('chalk')

//---------( APIKEY )---------//
global.APIs = {
zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
'https://zenzapis.xyz': 'BagasPrdn',
}

//---------( SETTING )---------//
global.owner = ['6281256023873','6281256023873','6281256023873']
global.premium = ['6281256023873']
global.ownernomer = '6281256023873'
global.ownername = 'Call Me Riss'
global.botname = '༄RISS BOTZ࿐'
global.footer = '༄RISS࿐'
global.thumb = fs.readFileSync('./image/fake.jpg')
global.veloriy = fs.readFileSync('./image/kagura.mp4')
global.sessionName = 'session'
global.packname = '©༄RISS BOTZ࿐'
global.author = 'RISS BOTZ'
global.sp = '⭔'

//---------( INFO )---------//
global.youtube = 'https://youtube.com/channel/UCx2gLWmH0M4QD-KSwOX17mQ'
global.ig = 'https://www.instagram.com/hy.riss02?r=nametag'
global.mygc = 'https://chat.whatsapp.com/E5lPT7myQ8xFe5tLoR2GY7'
global.myweb = 'https://www.instagram.com/hy.riss02?r=nametag'
global.email = 'tata85119@gmail.com'
global.region = 'indonesia'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'
global.limitawal = {
premium: "Infinity",
free: 15,
}

//---------( RANDOM IMAGE )---------//
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//---------( MESSAGES )---------//
global.mess = {
success: '_Done._',
admin: '_Fitur Khusus Admin Group!_',
botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
owner: '_Fitur Khusus Owner Bot_',
group: '_Fitur Digunakan Hanya Untuk Group!_',
private: '_Fitur Digunakan Hanya Untuk Private Chat!_',
bot: '_Fitur Khusus Pengguna Nomor Bot_',
wait: '_Sedang Di Proses..._',
error: '_Fitur Sedang Error!_',
endLimit: '_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_',
}

//---------( PEMBATAS )---------//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
