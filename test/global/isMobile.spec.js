import {expect} from 'chai';
import sinon from 'sinon';
import isMobile from '../../src/global/isMobile';

let userAgent = '';

describe('isMobile', () => {
    before(() => {
        sinon.stub(isMobile, "getUserAgent").callsFake(() => {return userAgent;});
    });

    it('.Android should return true for Android userAgent', () => {
        userAgent = 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19';

        expect(isMobile.Android()).to.be.true;
    });

    it('.Android should return false for non Android userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';

        expect(isMobile.Android()).to.be.false;
    });

    it('.BlackBerry should return true for BlackBerry userAgent', () => {
        userAgent = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+';

        expect(isMobile.BlackBerry()).to.be.true;
    });

    it('.BlackBerry should return false for non BlackBerry userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';

        expect(isMobile.BlackBerry()).to.be.false;
    });

    it('.iPhone should return true for iPhone userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25';

        expect(isMobile.iPhone()).to.be.true;
    });

    it('.iPhone should return false for non iPhone userAgent', () => {
        userAgent = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+';

        expect(isMobile.iPhone()).to.be.false;
    });

    it('.iPod should return true for iPod userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPod touch; CPU iPhone OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B511 Safari/9537.53';

        expect(isMobile.iPod()).to.be.true;
    });

    it('.iPod should return false for non iPod userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';

        expect(isMobile.iPod()).to.be.false;
    });

    it('.iPad should return true for iPad userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25';

        expect(isMobile.iPad()).to.be.true;
    });

    it('.iPad should return false for non iPad userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';

        expect(isMobile.iPad()).to.be.false;
    });

    it('.iOS should return true for iPhone userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';

        expect(isMobile.iOS()).to.be.true;
    });

    it('.iOS should return true for iPad userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25';

        expect(isMobile.iOS()).to.be.true;
    });

    it('.iOS should return true for iPod userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPod touch; CPU iPhone OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B511 Safari/9537.53';

        expect(isMobile.iOS()).to.be.true;
    });

    it('.iOS should return false for non iOS userAgent', () => {
        userAgent = 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19';

        expect(isMobile.iOS()).to.be.false;
    });

    it('.Opera should return true for Opera userAgent', () => {
        userAgent = 'Opera/9.80 (Android; Opera Mini/8.0.1807/36.1609; U; en) Presto/2.12.423 Version/12.16';

        expect(isMobile.Opera()).to.be.true;
    });

    it('.Opera should return false for non Opera userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';

        expect(isMobile.Opera()).to.be.false;
    });

    it('.Windows should return true for Windows userAgent', () => {
        userAgent = 'Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 630) like Gecko';

        expect(isMobile.Windows()).to.be.true;
    });

    it('.Windows should return false for non Windows userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';
        
        expect(isMobile.Windows()).to.be.false;
    });

    it('.KindleFire should return true for KindleFire userAgent', () => {
        userAgent ='Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Kindle Fire Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';

        expect(isMobile.KindleFire()).to.be.true;
    });

    it('.KindleFire should return false for non KindleFire userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';
        
        expect(isMobile.KindleFire()).to.be.false;
    });

    it('.any should return true for any mobile userAgent', () => {
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';

        expect(isMobile.any()).to.be.true;
    });

    it('.any should return false for desktop userAgent', () => {
        userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36';
        expect(isMobile.any()).to.be.false;
    });
});