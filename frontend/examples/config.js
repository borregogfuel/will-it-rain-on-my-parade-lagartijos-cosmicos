// Configuration for production deployment
// NOTE: Do NOT commit real API keys. Provide them via build-time env injection
// or by setting a global `window.__ENV__` object on your hosting platform.
const CONFIG = {
    // OpenWeatherMap API Key: will be read from window.__ENV__.OPENWEATHER_API_KEY
    // Keep this empty in source control. Use `.env` or hosting provider secrets.
    OPENWEATHER_API_KEY: (typeof window !== 'undefined' && window.__ENV__ && window.__ENV__.OPENWEATHER_API_KEY) || '',

    // Backend URL (si decides usar tu backend con Gemini)
    BACKEND_URL: 'https://tu-backend.railway.app', // Cambiar por tu URL real

    // Environment
    ENVIRONMENT: 'production' // o 'development'
};

// Export for use in CommonJS environments during development/builds
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

