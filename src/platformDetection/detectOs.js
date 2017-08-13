import isMobile from '../global/isMobile';

/**
 * # Gets whether running on a certain operating system according to browser data.
 * ## Functions to test for a certain operating system (each returns bool):
 * * isAndroid
 * * isBlackBerry
 * * isIos
 * * isMac
 * * isWindows
 * * isLinux
 * 
 * ## Function to get the operating system by name:
 * * get (possible return values: iOS, Android, Windows, Linux, Mac, BlackBerry, Unknown)
 * @example
 * ```js
 * detectOs.isAndroid() => true/false
 * detectOs.isIos() => true/false
 * detectOs.isWindows() => true/false
 * detectOs.isBlackBerry() => true/false
 * detectOs.isMac() => true/false
 * detectOs.isLinux() => true/false
 * detectOs.get() => iOS/Android/Windows/Linux/Mac/BlackBerry/Unknown
 * ```
 */

const detectOs = {
    getUserAgent: () => {
        return navigator.userAgent;
    },
    getPlatform: () => {
        return navigator.platform;
    },
    isIos: () => {
        return /iPhone|iPad|iPod/.test(detectOs.getPlatform());
    },
    isAndroid: () => {
        return /Android/.test(detectOs.getUserAgent());
    },
    isBlackBerry: () => {
        return /BlackBerry/.test(detectOs.getPlatform());
    },
    isMac: () => {
        return /Mac/.test(detectOs.getPlatform());
    },
    isWindows: () => {
        return /Win/.test(detectOs.getPlatform());
    },
    isLinux: () => {
        return /Linux/.test(detectOs.getPlatform()) && !detectOs.isAndroid();
    },
    get: () => {
        if (detectOs.isIos()) return 'iOS';
        if (detectOs.isAndroid()) return 'Android';
        if (detectOs.isBlackBerry()) return 'BlackBerry';
        if (detectOs.isMac()) return 'Mac';
        if (detectOs.isWindows()) return 'Windows';
        if (detectOs.isLinux()) return 'Linux';
        return 'Unknown';
    }
}

module.exports = detectOs;