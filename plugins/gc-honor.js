const handler = async (m, { conn, text }) => {
    
const message = `
_*SE LES RECUERDA A TODOS A HACER HONOR, RECUERDEN QUE SON ${text} CADA SEMANA SI NO COMPLETAN SU HONOR, EVITENOS LA PENA DE SACARLO PORQUE NO PREGUNTE PORQUE LO SACAMOS, LES RECUERDO SON ${text} ALA SEMANA*_
`.trim()
    
conn.sendMessage(m.chat, {text: message}, {quoted: m})    
    
};
handler.command = /^(Honor|honor)$/i;
export default handler;