import {expect} from 'chai';
import sinon from 'sinon';
import detectOs from '../../src/platformDetection/detectOs';

let userAgent = '';
let platform = '';

describe('detectOs', () => {
    before(() => {
        sinon.stub(detectOs, "getUserAgent", () => userAgent);
        sinon.stub(detectOs, "getPlatform", () => platform);
    });

    it('.isAndroid should return true for Android userAgent even though platform is Linux', () => {
        userAgent = 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19';
        platform = 'Linux';

        expect(detectOs.isAndroid()).to.be.true;
    });

    it('.isAndroid should return false for non Android userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';

        expect(detectOs.isAndroid()).to.be.false;
    });

    it('.isBlackBerry should return true for BlackBerry platform', () => {
        platform = 'BlackBerry';

        expect(detectOs.isBlackBerry()).to.be.true;
    });

    it('.isBlackBerry should return false for non BlackBerry userAgent', () => {
        platform = 'iPad';

        expect(detectOs.isBlackBerry()).to.be.false;
    });

    it('.isIos should return true for iPhone platform', () => {
        platform = 'iPhone';

        expect(detectOs.isIos()).to.be.true;
    });

    it('.isIos should return true for iPad platform', () => {
        platform = 'iPad';

        expect(detectOs.isIos()).to.be.true;
    });

    it('.isIos should return true for iPod platform', () => {
        platform = 'iPod';

        expect(detectOs.isIos()).to.be.true;
    });

    it('.isIos should return false for non iOS platform', () => {
        platform = 'Windows';

        expect(detectOs.isIos()).to.be.false;
    });

    it('.isMac should return true for Macintosh platform', () => {
        platform = 'Macintosh';

        expect(detectOs.isMac()).to.be.true;
    });

    it('.isMac should return true for MacIntel platform', () => {
        platform = 'MacIntel';

        expect(detectOs.isMac()).to.be.true;
    });

    it('.isMac should return true for MacPPC platform', () => {
        platform = 'MacPPC';

        expect(detectOs.isMac()).to.be.true;
    });

    it('.isMac should return true for Mac68K platform', () => {
        platform = 'Mac68K';

        expect(detectOs.isMac()).to.be.true;
    });

    it('.isMac should return false for non-mac platform', () => {
        platform = 'Windows';

        expect(detectOs.isMac()).to.be.false;
    });

    it('.isWindows should return true for Windows platform', () => {
        platform = 'Windows';

        expect(detectOs.isWindows()).to.be.true;
    });

    it('.isWindows should return true for Win16 platform', () => {
        platform = 'Win16';

        expect(detectOs.isWindows()).to.be.true;
    });

    it('.isWindows should return true for Win32 platform', () => {
        platform = 'Win32';

        expect(detectOs.isWindows()).to.be.true;
    });

    it('.isWindows should return true for WinCE platform', () => {
        platform = 'WinCE';

        expect(detectOs.isWindows()).to.be.true;
    });

    it('.isWindows should return false for non-Windows platform', () => {
        platform = 'Macintosh';

        expect(detectOs.isWindows()).to.be.false;
    });

    it('.isLinux should return true for Linux platform', () => {
        platform = 'Linux';
        userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2';

        expect(detectOs.isLinux()).to.be.true;
    });

    it('.isLinux should return true for Linux aarch64 platform', () => {
        platform = 'Linux aarch64';
        userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2';

        expect(detectOs.isLinux()).to.be.true;
    });

    it('.isLinux should return true for Linux armv5tejl platform', () => {
        platform = 'Linux armv5tejl';
        userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2';

        expect(detectOs.isLinux()).to.be.true;
    });

    it('.isLinux should return true for Linux armv6l platform', () => {
        platform = 'Linux armv6l';
        userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2';

        expect(detectOs.isLinux()).to.be.true;
    });

    it('.isLinux should return true for Linux armv7l platform', () => {
        platform = 'Linux armv7l';
        userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2';

        expect(detectOs.isLinux()).to.be.true;
    });

    it('.isLinux should return true for Linux i686 on x86_64 platform', () => {
        platform = 'Linux i686 on x86_64';
        userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2';

        expect(detectOs.isLinux()).to.be.true;
    });

    it('.isLinux should return true for Linux i686 X11 platform', () => {
        platform = 'Linux i686 X11';
        userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2';

        expect(detectOs.isLinux()).to.be.true;
    });

    it('.isLinux should return true for Linux ppc64 platform', () => {
        platform = 'Linux ppc64';
        userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2';

        expect(detectOs.isLinux()).to.be.true;
    });

    it('.isLinux should return true for Linux x86_64 platform', () => {
        platform = 'Linux x86_64';
        userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2';

        expect(detectOs.isLinux()).to.be.true;
    });

    it('.isLinux should return true for Linux x86_64 X11 platform', () => {
        platform = 'Linux x86_64 X11';
        userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2';

        expect(detectOs.isLinux()).to.be.true;
    });

    it('.isLinux should return false for Linux platform when user agent is Android', () => {
        platform = 'Linux';
        userAgent = 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19';

        expect(detectOs.isLinux()).to.be.false;
    });

    it('.isLinux should return false for non-Linux platform', () => {
        platform = 'Windows';

        expect(detectOs.isLinux()).to.be.false;
    });

    it('.get should return Linux when os is Linux', () => {
        platform = 'Linux x86_64 X11';
        userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2';

        expect(detectOs.get()).to.eql('Linux');
    });

    it('.get should return Windows when os is Windows', () => {
        platform = 'Windows';
        userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.5 (KHTML, like Gecko) YaBrowser/1.1.1084.5410 Chrome/19.1.1084.5410 Safari/536.5';

        expect(detectOs.get()).to.eql('Windows');
    });

    it('.get should return Mac when os is Mac', () => {
        platform = 'Macintosh';
        userAgent = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.8; en-US; rv:1.9.1.6) Gecko/20120121 Firefox/3.5.6 Wyzo/3.5.6.1';

        expect(detectOs.get()).to.eql('Mac');
    });

    it('.get should return iOS when os is iOS', () => {
        platform = 'iPhone';
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';

        expect(detectOs.get()).to.eql('iOS');
    });

    it('.get should return Android when os is Android', () => {
        userAgent = 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19';
        platform = 'Linux';

        expect(detectOs.get()).to.eql('Android');
    });

    it('.get should return BlackBerry when os is BlackBerry', () => {
        platform = 'BlackBerry';
        userAgent = 'BlackBerry9700/5.0.0.535 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/-1';

        expect(detectOs.get()).to.eql('BlackBerry');
    });

    it('.get should return Unknown for other os', () => {
        platform = 'Symbian';

        expect(detectOs.get()).to.eql('Unknown');
    });
});