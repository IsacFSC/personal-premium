export const WHATSAPP_NUMBER = "5567999999999";
export const WHATSAPP_STORE_1 = "5567999999999";
export const WHATSAPP_STORE_2 = "5567999999999";

export function buildWhatsAppUrl(
  phone: string,
  message: string = "Olá! Vim pelo site e gostaria de mais informações.",
): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function buildProductWhatsAppUrl(
  productName: string,
  price: string,
): string {
  const message = `Olá! Gostaria de conhecer o Studio *${productName}* (${price}). Poderia me passar mais informações?`;
  return buildWhatsAppUrl(WHATSAPP_NUMBER, message);
}
