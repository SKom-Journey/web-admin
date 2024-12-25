export default function checkSession() {
    const token = localStorage.getItem('info');
    if(token == null) {
        localStorage.clear();
        return false;
    }
    return true;
}