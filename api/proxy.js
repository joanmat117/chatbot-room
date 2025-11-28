import { createProxyMiddleware } from 'http-proxy-middleware';

const ALLOWED_TARGET_DOMAINS = [
  'generativelanguage.googleapis.com', // Ejemplo para la API de Gemini
  'api.github.com',                    // Ejemplo para GitHub API
  'jsonplaceholder.typicode.com',      // Ejemplo para una API de prueba
  // Añade aquí *todos* los dominios a los que tu frontend necesita acceder a través del proxy.
  // Puedes cargar esta lista desde una variable de entorno de Vercel (ej. separada por comas)
  // para mayor flexibilidad sin redocumentar el código.
];
// --- FIN ADVERTENCIA DE SEGURIDAD ---


// La función serverless principal de Vercel
export default function (req, res) {
  // 1. Extraer la URL de destino del parámetro de consulta 'url'
  //    Ej: /api?url=https://api.ejemplo.com/recurso/data?param=value
  const targetUrlParam = req.query.url;

  if (!targetUrlParam) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Error: El parámetro "url" es requerido. Uso: /api?url=https://api.destino.com/ruta');
    return;
  }

  let targetHost;
  let targetPath;
  try {
    const parsedTargetUrl = new URL(targetUrlParam);
    targetHost = `${parsedTargetUrl.protocol}//${parsedTargetUrl.host}`;
    targetPath = `${parsedTargetUrl.pathname}${parsedTargetUrl.search}`;

    // --- APLICACIÓN DE LA LISTA BLANCA DE SEGURIDAD ---
    if (!ALLOWED_TARGET_DOMAINS.includes(parsedTargetUrl.host)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end(`Error: Acceso denegado. El dominio ${parsedTargetUrl.host} no está permitido.`);
      return;
    }
    // --- FIN SEGURIDAD ---

  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Error: El valor del parámetro "url" no es una URL válida.');
    return;
  }

  // 2. Configuración dinámica del proxy para esta solicitud
  const dynamicProxy = createProxyMiddleware({
    target: targetHost,
    changeOrigin: true, // Muy importante: Asegura que el host de destino vea el origen correcto.
    ws: true,           // Habilita soporte para WebSockets (si tu API de destino los usa).

    // Esta función reescribe la ruta de la solicitud para que la URL que se envía
    // al servidor de destino sea la que se especifica en 'targetPath'.
    pathRewrite: (path, req) => {
      // Ignoramos la ruta original que llegó al proxy (ej. '/api').
      // Usamos directamente la ruta y los parámetros de consulta de la URL de destino.
      return targetPath;
    },

    // Callback que se ejecuta antes de reenviar la solicitud al destino.
    onProxyReq: (proxyReq, req, res) => {
      // console.log(`Proxying: ${req.method} ${req.url} -> ${targetHost}${targetPath}`);
      // Aquí podrías añadir lógica para eliminar cabeceras no deseadas que vienen del cliente
      // o añadir cabeceras que el backend espere (ej. User-Agent, X-Forwarded-For).
      // Por defecto, todas las cabeceras originales del cliente (incluyendo Authorization, Content-Type, etc.)
      // y el cuerpo de la solicitud se reenvían al destino sin modificación.
    },

    // Callback que se ejecuta cuando se recibe la respuesta del destino.
    onProxyRes: (proxyRes, req, res) => {
      // Aquí podrías manipular las cabeceras de la respuesta del backend antes de enviarlas al cliente.
      // Por ejemplo, para añadir cabeceras CORS si la API de destino no las proporciona y el cliente las necesita.
      // Ejemplo:
      // proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    },

    // Manejo de errores del proxy
    onError: (err, req, res) => {
      console.error(`[PROXY ERROR] for ${req.url} (targeting ${targetHost}${targetPath}):`, err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end(`Error en el proxy: No se pudo conectar con la API de destino o hubo un problema. ${err.message}`);
    },
  });

  // Ejecutar el middleware de proxy con la solicitud y respuesta de Vercel.
  dynamicProxy(req, res);
}
