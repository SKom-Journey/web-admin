export default function storeSession(info: any) {
    localStorage.setItem('info', JSON.stringify(info));
}