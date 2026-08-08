import CryptoJS from 'crypto-js';

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

class CacheManager {
    set(key, value, duration) {
        const timestamp = new Date().getTime();
        const payload = JSON.stringify({ value, timestamp, duration });

        if (SECRET_KEY) {
            const encrypted = CryptoJS.AES.encrypt(payload, SECRET_KEY).toString();
            localStorage.setItem(key, encrypted);
            return;
        }

        localStorage.setItem(key, payload);
    }

    get(key) {
        const stored = localStorage.getItem(key);
        if (!stored) return null;

        try {
            const decrypted = SECRET_KEY
                ? CryptoJS.AES.decrypt(stored, SECRET_KEY).toString(CryptoJS.enc.Utf8)
                : stored;
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