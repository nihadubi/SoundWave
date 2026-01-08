/**
 * SoundWave Configuration
 * Auto-detects localhost vs production
 */

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.API_BASE = 'http://localhost:5000/api';
} else {
    window.API_BASE = 'https://soundwave-production-825a.up.railway.app/api';
}
