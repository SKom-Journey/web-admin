export const QR = {
   GetQrs: () => `/qrs`,
   GetQrByTableNumber: (table_number: string) => `/qrs/${table_number}`,
   CreateQr: () => `/qrs`,
   DeleteQr: (qr_id: string) => `/qrs/${qr_id}`
}