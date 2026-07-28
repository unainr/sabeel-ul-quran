// WhatsApp Integration Utility
// Replace this number with your actual WhatsApp business number
export const WHATSAPP_NUMBER = "447853148468"; // Format: country code + number (no + or spaces)

export function sendToWhatsApp(message: string) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
}

export function createWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

// Pre-formatted messages for different actions
export const whatsappMessages = {
  programEnrollment: (programName: string) =>
    `Hi! I'm interested in enrolling in the *${programName}* program. Can you provide more details?`,
  
  eventRegistration: (eventName: string) =>
    `Hi! I'd like to register for the *${eventName}* event. Please send me the details.`,
  
  generalInquiry: () =>
    `Hi! I have a question about Sabeel Ul Quran. Can you help me?`,
  
  donationInquiry: () =>
    `Hi! I'd like to make a donation. How can I proceed?`,
};
