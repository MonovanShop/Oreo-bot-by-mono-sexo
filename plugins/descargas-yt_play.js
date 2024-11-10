import yts from 'yt-search'; // Importamos la librería de búsqueda en YouTube
import axios from 'axios'; // Importamos axios para hacer las peticiones HTTP

const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw Ejemplo: ${usedPrefix + command} diles; // Si no hay texto (título del video), mostramos un ejemplo.

    const randomReduction = Math.floor(Math.random() * 5) + 1; // Solo se usa el randomReduction, si es necesario puedes eliminarlo
    let search = await yts(text); // Realizamos la búsqueda en YouTube
    let isVideo = /vid$/.test(command); // Si el comando es 'playvid', será un video, si es 'play' solo audio.
    let urls = search.all[0].url; // Tomamos la URL del primer resultado

    let body = `🎶 ¡Disfruta de tu música gracias a MonoSexo! 🎶

➢ Título: ${search.all[0].title}
➢ Vistas: ${search.all[0].views}
➢ Duración: ${search.all[0].timestamp}
➢ Subido hace: ${search.all[0].ago}
➢ Enlace: [Escuchar en YouTube](${urls})

🕒 ¡Tu ${isVideo ? 'Video' : 'Audio'} se está preparando! Relájate y disfruta del momento... 🎧✨`;

    conn.sendMessage(m.chat, { 
        image: { url: search.all[0].thumbnail }, 
        caption: body
    }, { quoted: m });

    m.react('✅');

    let res = await dl_vid(urls); // Llamamos la función para descargar el video/audio
    let type = isVideo ? 'video' : 'audio'; // Determinamos si es video o audio
    let video = res.data.mp4; // Obtenemos la URL del video en MP4
    let audio = res.data.mp3; // Obtenemos la URL del audio en MP3

    conn.sendMessage(m.chat, { 
        [type]: { url: isVideo ? video : audio }, 
        gifPlayback: false, 
        mimetype: isVideo ? "video/mp4" : "audio/mpeg" 
    }, { quoted: m });
};

handler.command = ['play', 'playvid'];
handler.help = ['play', 'playvid'];
handler.tags = ['dl'];
export default handler;

// Función para descargar el video/audio
async function dl_vid(url) {
    try {
        const response = await axios.post('https://shinoa.us.kg/api/download/ytdl', {
            text: url
        }, {
            headers: {
                'accept': '/',
                'api_key': 'free',
                'Content-Type': 'application/json'
            }
        });

        if (response.status !== 200) {
            throw new Error(HTTP error! status: ${response.status});
        }

        return response.data; // Devolvemos los datos de la respuesta
    } catch (error) {
        throw new Error(Error en la descarga: ${error.message});
    }
}
