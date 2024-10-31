// by https://github.com/elrebelde21
 
let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;

if (/^menu de ventas|menú de ventas|ventas$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Hola buenas, tenemos a la venta:
🔸Bot de etiquetas para grupos 24/7
🔸Bot de etiquetas propio personalizado
🔸APK de Spotify premium

Selecciona tu opción escribiendo lo que necesites

EJEMPLO:
bot de etiquetas
bot personalizado
APK de Spotify premium`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^bot de etiquetas|bot para grupos|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Estos son los precios que tenemos por 3 grupos permanentes:
$80🇲🇽
$3🇺🇸`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^bot personalizado|bot propio personalizado|bot de etiquetas propio personalizado|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Estos son los precios que tenemos para bot propio personalizado:
$150🇲🇽
$6🇺🇸`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^chips|chip mexicano|chips mexicano|info del chip|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Estos son los precios que tenemos para números de chip +52:
$20🇲🇽
$1🇺🇸`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^APK de spam|APK para spam|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Estos son los precios que tenemos para APK de spam:
$80🇲🇽
$3🇺🇸`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^APK de Spotify premium|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Estos son los precios que tenemos para APK de Spotify premium:
$80🇲🇽
$3🇺🇸`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^APK de seguidores|APK para seguidores|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Estos son los precios que tenemos para APK de seguidores:
$80🇲🇽
$3🇺🇸`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^bot de etiquetas|bot para grupos|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🤖El bot de etiquetas para grupos 24/7 es un bot que contiene comandos como stickers, musica, etiqueta general,  inteligencia artificial(chatgpt), y esta activo siempre, es mas rapido que cualquier otro ya que pagamos un servicio para mantenerlo siempre activo y eficiente`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^bot personalizado|bot propio personalizado|bot de etiquetas propio personalizado|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🤖El bot de etiquetas propio personalizado incluye lo mismo que el bot para grupos, con la diferencia que este puede personalizarse, lleva tu nombre, tu numero como moderador del bot, tu instagram, tu foto o logo, y la etiqueta general es personalizada tambien`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^números de chip chilenos +56|chip chilenos +56|chips +56|info del chip|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🪪Los numeros de chip chilenos +56 son numeros que te permitiran registrarlos en whatsapp, telegram, google, instagram o en la red social de tu preferencia, lo mejor de todo es que te servira como una segunda cuenta de whatsapp, y podras pedir codigo al numero cuando mas lo necesites`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^APK de spam|APK para spam|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`👾El APK de spam, es un APK que te permite ser tu propio spamer y hacer llegar tu producto a mas personas, viene de regalo con 1500 comunidades para hacer tu spam mas efectivo`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^APK de Spotify premium|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🎶El APK de spotify premium es un APK que te permitira disfrutar de todas las funciones premium de spotify, sin necesidad de pagar mensualmente ya que este APK es permanente, podras escuchar musica ilimitadamente, saltar las canciones que desees, descargar tus playlists y sobre todo no tendras anuncios molestos`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^APK de seguidores|APK para seguidores|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`👾El APK de seguidores es un APK que te permitira ganar seguidores de una manera rapida y sencilla, te ayudara a tener mas alcance en tus redes y tus publicaciones llegaran a mas personas`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^bot de etiquetas|bot para grupos|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*🤔¿DESEA CONTINUAR CON LA COMPRA?🤔*
Para poder brindarle los datos para realizar el pago

*Si desea adquirir algun producto escriba:*
Deseo continuar
*Si no desea adquirir ningun producto escriba:*
No gracias`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^bot personalizado|bot propio personalizado|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*🤔¿DESEA CONTINUAR CON LA COMPRA?🤔*
Para poder brindarle los datos para realizar el pago

*Si desea adquirir algun producto escriba:*
Deseo continuar
*Si no desea adquirir ningun producto escriba:*
No gracias`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^números de chip chilenos +56|chip chilenos +56|chips +56|precios|info del chip|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*🤔¿DESEA CONTINUAR CON LA COMPRA?🤔*
Para poder brindarle los datos para realizar el pago

*Si desea adquirir algun producto escriba:*
Deseo continuar
*Si no desea adquirir ningun producto escriba:*
No gracias`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^APK de Spotify premium|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*🤔¿DESEA CONTINUAR CON LA COMPRA?🤔*
Para poder brindarle los datos para realizar el pago

*Si desea adquirir algun producto escriba:*
Deseo continuar
*Si no desea adquirir ningun producto escriba:*
No gracias`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^APK de seguidores|APK para seguidores|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*🤔¿DESEA CONTINUAR CON LA COMPRA?🤔*
Para poder brindarle los datos para realizar el pago

*Si desea adquirir algun producto escriba:*
Deseo continuar
*Si no desea adquirir ningun producto escriba:*
No gracias`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^APK de spam|APK para spam|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*🤔¿DESEA CONTINUAR CON LA COMPRA?🤔*
Para poder brindarle los datos para realizar el pago

*Si desea adquirir algun producto escriba:*
Deseo continuar
*Si no desea adquirir ningun producto escriba:*
No gracias`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^deseo continuar|si quiero comprar$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Selecciona tu método de pago por favor:
México🇲🇽
Estados Unidos🇺🇸`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^no, gracias|no quiero comprar|no gracias$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*🫶GRACIAS A USTED, VUELVA PRONTO🫶*
En caso se arrepienta de su decisión, puede volver a interactuar con nuestro chatbot dentro de una hora

Que tenga lindo dia<3`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^mexico|méxico|mexico🇲🇽|méxico🇲🇽|🇲🇽$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🇲🇽 MEXICO
TITULAR: MA COCABET 

🏦 BANCO BBVA
4152314155999181`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}


if (/^paypal|estados unidos🇺🇸|🇺🇸$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🇺🇸 PAY PAL
https://www.paypal.me/5631709515`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^chile|chile🇨🇱|🇨🇱$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🇨🇱Cta rut : 
20.993.589-9
👤Nombre:
Paula Aquino`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^bolivia🇧🇴|🇧🇴$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^perú🇵🇪|peru🇵🇪|🇵🇪|perú|peru$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^mexico|méxico|mexico🇲🇽|méxico🇲🇽|🇲🇽$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^colombia|colombia🇨🇴|🇨🇴$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^uruguay|uruguay🇺🇾|🇺🇾$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^paraguay|paraguay🇵🇾|🇵🇾$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^paypal|estados unidos🇺🇸|🇺🇸$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^chile|chile🇨🇱|🇨🇱$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^argentina|argentina🇦🇷|🇦🇷$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^¿que es un bot?|Que es un bot$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `╭┄〔 *${wm}* 〕┄⊱
┆ ——————«•»——————
┆ ☆::¿𝐐𝐮𝐞́ 𝐞𝐬 𝐮𝐧 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩?::☆
┆——————«•»——————
┆ 𝐔𝐧 𝐁𝐨𝐭 𝐞𝐬 𝐮𝐧𝐚 𝐢𝐧𝐭𝐞𝐥𝐢𝐠𝐞𝐧𝐜𝐢𝐚 𝐚𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥 𝐪𝐮𝐞 𝐫𝐞𝐚𝐥𝐢𝐳𝐚 𝐭𝐚𝐫𝐞𝐚𝐬
┆ 𝐪𝐮𝐞 𝐥𝐞 𝐢𝐧𝐝𝐢𝐪𝐮𝐞 𝐜𝐨𝐧 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬, 𝐞𝐧 𝐞𝐥 𝐜𝐚𝐬𝐨 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 
┆ 𝐩𝐮𝐞𝐝𝐞𝐬 𝐜𝐫𝐞𝐚𝐫 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐬, 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐦𝐮́𝐬𝐢𝐜𝐚, 𝐯𝐢𝐝𝐞𝐨𝐬, 
┆ 𝐜𝐫𝐞𝐚𝐫 𝐥𝐨𝐠𝐨𝐬 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨𝐬 𝐲 𝐦𝐮𝐜𝐡𝐨 𝐦𝐚𝐬, 
┆ 𝐞𝐬𝐭𝐨 𝐝𝐞 𝐟𝐨𝐫𝐦𝐚 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐳𝐚𝐝𝐚, 𝐨 𝐬𝐞𝐚 𝐪𝐮𝐞 𝐮𝐧 𝐡𝐮𝐦𝐚𝐧𝐨 
┆ 𝐧𝐨 𝐢𝐧𝐭𝐞𝐫𝐟𝐢𝐞𝐫𝐞 𝐞𝐧 𝐞𝐥 𝐩𝐫𝐨𝐜𝐞𝐬𝐨 
┆ 𝐏𝐚𝐫𝐚 𝐯𝐞𝐫 𝐞𝐥 𝐦𝐞𝐧𝐮́ 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 #menu
┆ 
┆ 「 MonkeyBot 」
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

           
