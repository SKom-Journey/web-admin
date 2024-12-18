export const QR = {
   GetQrs: () => `/qrs`,
   GetQrByTableNumber: (table_number: number) => `/qrs/${table_number}/`,
   CreateQr: () => `/qrs`,
   DeleteQr: (qr_id: string) => `/qrs/${qr_id}`
}