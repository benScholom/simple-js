
import detectOs from './detectOs';

/**
 * Gets the operating system and version the device is running on.
 * Works for Windows, Android, iOS, Mac OS X and BlackBerry.
 * @bit
 */

/**
 * @name get
 * @returns {{os:string, version:string}}
 * @example
 * ```js
 * detectOsVersion.get() => {os: 'Windows', version: '8.1'}
 * detectOsVersion.get() => {os: 'Android', version: '4.2.2'}
 * detectOsVersion.get() => {os: 'iOS', version: '5.1.1'}
 * detectOsVersion.get() => {os: 'Mac', version: '10.7.1'}
 * detectOsVersion.get() => {os: 'Linux', version: 'Unknown'}
 * detectOsVersion.get() => {os: 'Unknown', version: 'Unknown'}
 * ```
 * @bit
 */

const detectOsVersion = {
    getUserAgent: () => {
        console.log('original invoked');
        return navigator.userAgent;
    },
    get: () => {
        const os = detectOs.get();
        let version = 'Unknown';

        switch (os) {
            case 'Android': {
                const splitUserAgent = detectOsVersion.getUserAgent().split('Android ');
                if (splitUserAgent.length > 1) {
                    version = splitUserAgent[1].split(';')[0];
                }
            }
            break;
            case 'Windows': {
                const splitUserAgent = detectOsVersion.getUserAgent().split('Windows NT ');
                if (splitUserAgent.length > 1) {
                    const versionSubStr = splitUserAgent[1];

                    if (versionSubStr.startsWith('5.0')) {
                        version = '2000';
                    } else if (versionSubStr.startsWith('5.1')) {
                        version = 'XP';
                    } else if (versionSubStr.startsWith('5.2')) {
                        version = 'Server';
                    } else if (versionSubStr.startsWith('6.0')) {
                        version = 'Vista';
                    } else if (versionSubStr.startsWith('6.1')) {
                        version = '7';
                    } else if (versionSubStr.startsWith('6.2')) {
                        version = '8';
                    } else if (versionSubStr.startsWith('6.3')) {
                        version = '8.1';
                    } else if (versionSubStr.startsWith('10.0')) {
                        version = '10';
                    } 
                }
            }
            break;
            case 'iOS': {
                const osStr = 'OS ';
                const splitUserAgent = detectOsVersion.getUserAgent().split('OS ');
                if (splitUserAgent.length > 1) {
                    const unformattedVersion = splitUserAgent[1].split(' ')[0];
                    version = unformattedVersion.split('_').join('.');
                }
            }
            break;
            case 'Mac': {
                const splitUserAgent = detectOsVersion.getUserAgent().split('Mac OS X ');
                if (splitUserAgent.length > 1) {
                    let endOfVersion = splitUserAgent[1].indexOf(';');
                    const firstParantheses = splitUserAgent[1].indexOf(')');
                    if (firstParantheses > -1 && (firstParantheses < endOfVersion || endOfVersion == -1)) {
                        endOfVersion = firstParantheses;
                    }
                        
                    const unformattedVersion = splitUserAgent[1].substring(0, endOfVersion);
                    version = unformattedVersion.split('_').join('.');
                }
            }
            break;
            case 'BlackBerry': {
                let splitUserAgent = detectOsVersion.getUserAgent().split('BlackBerry9700/');
                if (splitUserAgent.length > 1) {
                    version = splitUserAgent[1].split(' ')[0];
                } else {
                    splitUserAgent = detectOsVersion.getUserAgent().split('Version/');
                    if (splitUserAgent.length > 1) {
                        version = splitUserAgent[1].split(' ')[0];
                    }
                }
            }
            break;
        }

        return {
            os: os,
            version: version
        }
    }
};

module.exports = detectOsVersion;