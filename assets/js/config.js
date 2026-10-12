/*
 * CONFIGURACIÓN — cambia estos datos antes de publicar.
 *
 * Números de WhatsApp en formato internacional, solo dígitos: 1 + número (USA).
 * Ejemplo: '12125551234'. Si se deja vacío, WhatsApp abre el mensaje
 * y el cliente escoge a quién enviarlo.
 */
window.CONFIG = {
  brand: 'NBmates',

  // Número que recibe los pedidos por unidad.
  whatsapp: '',

  // Número para compras al por mayor (aún no definido).
  whatsappWholesale: '',

  // Puntos donde el cliente puede pasar a recoger su pedido.
  // Ejemplo: ['Brooklyn – Bedford Ave', 'Queens – Astoria']. Vacío = se coordina por chat.
  pickupPoints: [],

  // Número de licencia de venta de cannabis (OCM de Nueva York).
  // Mientras esté vacío, la sección de destilados no aparece.
  cannabisLicense: '',

  // Máximo de unidades por pedido desde la página.
  maxQty: 10,
};
