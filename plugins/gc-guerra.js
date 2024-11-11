const handler = async (m, { conn, text }) => {
    
const message = `
_*RECUERDEN QUE SE LES PIDE ${text} DE PLACAS, PERSONA QUE NO ESTE EN GUERRA ACOMPLETANDOLAS SERA ELIMINADA DEL CLAN, REPITO DE NUEVO, SON ${text} PLACAS EN LA GUERRA DE CLANES*_
`.trim()
    
conn.sendMessage(m.chat, {text: message}, {quoted: m})    
    
};
handler.command = /^(guerra|Guerra|Placas|placas)$/i;
export default handler;