export function useToken() {
    
    const allCookies = document.cookie; // Mengambil semua cookies

    // Parsing cookies ke dalam objek
    const cookiesArray = allCookies.split('; ');
    const cookies = {};
    cookiesArray.forEach(cookie => {
        const [name, value] = cookie.split('=');
        cookies[name] = decodeURIComponent(value);
    });

    // Mengakses nilai spesifik dari cookies
    return cookies.token

}