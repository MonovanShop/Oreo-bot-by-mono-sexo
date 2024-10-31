let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝖈𝖊𝖔𝖌𝖊𝖗𝖎𝖕𝖎𝖚𝖒.𝖉𝖟𝖓🫦 ${pesan}`
let teks = `*𝐌𝐎𝐍𝐊𝐄𝐘  𝐁𝐎𝐓 𝐓𝐄 𝐇𝐀𝐁𝐀𝐋𝐀*\n𝐇𝐃𝐓𝐏𝐌🥇\n${oi}\n\n*👑𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨*\n`
for (let mem of participants) {
teks += `👑≋ @${mem.id.split('@')[0]}\n`}
teks += `𝐌𝐎𝐍𝐊𝐄𝐘 𝐁𝐎𝐓`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
