import CryptoJS from 'crypto-js';

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

class CacheManager {
    set(key, value, duration) {
        const timestamp = new Date().getTime();
        const payload = JSON.stringify({ value, timestamp, duration });
        const encrypted = CryptoJS.AES.encrypt(payload, SECRET_KEY).toString();
        localStorage.setItem(key, encrypted);
    }

    get(key) {
        const encrypted = localStorage.getItem(key);
        if (!encrypted) return null;
        try {
            const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);
            const { value, timestamp, duration } = JSON.parse(decrypted);
            const now = new Date().getTime();
            if (now - timestamp > duration) {
                localStorage.removeItem(key);
                return null;
            }
            return value;
        } catch {
            localStorage.removeItem(key);
            return null;
        }
    }

    clear() {
        localStorage.clear();
    }

    clearKey(key) {
        localStorage.removeItem(key);
    }
}

export const cacheManager = new CacheManager();