import {expect} from 'chai';
import sinon from 'sinon';
import mockery from 'mockery';

let userAgent = '';
let platform = '';
let os = '';
const detectOsMock = {
    get: () => {
        return os;
    }
}

mockery.enable({ useCleanCache: true, warnOnUnregistered: false });
mockery.registerMock('./detectOs', detectOsMock); 
const detectOsVersion = require('../../src/platformDetection/detectOsVersion');


describe('detectOsVersion', () => {
    before(() => {
        sinon.stub(detectOsVersion, "getUserAgent").callsFake(() => userAgent);   
    });

    after(() => {
        mockery.deregisterAll();
    });

    it('Should return Unknown version for Linux os', () => {
        userAgent = 'Mozilla/5.0 (X11; U; Linux x86_64; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/531.2+';
        os = 'Linux';
        expect(detectOsVersion.get()).to.deep.eql({os: 'Linux', version: 'Unknown'});
    });

    it('Should return Unknown os and version for unlisted os such as Symbian', () => {
        userAgent = 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95_8GB/35.0.001; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413';
        os = 'Unknown';

        expect(detectOsVersion.get()).to.deep.eql({os: 'Unknown', version: 'Unknown'});
    });

    it('Should return version for Android', () => {
        userAgent = 'Mozilla/5.0 (Linux; Android 4.2.2; en-us; SAMSUNG-SGH-I337 Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Version/1.0 Chrome/18.0.1025.308 Mobile Safari/535.19';
        os = 'Android';

        expect(detectOsVersion.get()).to.deep.eql({os: 'Android', version: '4.2.2'});
    });

    it('Should return version for BlackBerry 5', () => {
        userAgent = 'BlackBerry9700/5.0.0.535 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/-1';
        os = 'BlackBerry';

        expect(detectOsVersion.get()).to.deep.eql({os: 'BlackBerry', version: '5.0.0.535'});
    });

    it('Should return version for BlackBerry 7.1', () => {
        userAgent = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9380; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.523 Mobile Safari/534.11+';
        os = 'BlackBerry';

        expect(detectOsVersion.get()).to.deep.eql({os: 'BlackBerry', version: '7.1.0.523'});
    });

    it('Should return version for Mac OS X', () => {
        userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/534.56.5 (KHTML, like Gecko) Safari/unknown';
        os = 'Mac';

        expect(detectOsVersion.get()).to.deep.eql({os: 'Mac', version: '10.7.4'});
    });

    it('Should return version for iOS', () => {
        userAgent = 'Mozilla/5.0 (iPod; U; CPU iPhone OS 5_1_1 like Mac OS X; en-us) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3';
        os = 'iOS';

        expect(detectOsVersion.get()).to.deep.eql({os: 'iOS', version: '5.1.1'});
    });

    it('Should return version for Windows 2000', () => {
        userAgent = 'Mozilla/4.0 (compatible; MSIE 6.0; MSIE 5.5; Windows NT 5.0) Opera 7.02 Bork-edition [en]';
        os = 'Windows';

        expect(detectOsVersion.get()).to.deep.eql({os: 'Windows', version: '2000'});
    });

    it('Should return version for Windows XP', () => {
        userAgent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.22) Gecko/20110902 Firefox/3.6.22';
        os = 'Windows';

        expect(detectOsVersion.get()).to.deep.eql({os: 'Windows', version: 'XP'});
    });

    it('Should return version for Windows Server', () => {
        userAgent = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; CognosRCP)';
        os = 'Windows';

        expect(detectOsVersion.get()).to.deep.eql({os: 'Windows', version: 'Server'});
    });

    it('Should return version for Windows Vista', () => {
        userAgent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; WOW64; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; eSobiSubscriber 2.0.4.16; .NET CLR 3.5.30729; .NET4.0C; .NET CLR 3.0.30729)';
        os = 'Windows';

        expect(detectOsVersion.get()).to.deep.eql({os: 'Windows', version: 'Vista'});
    });

    it('Should return version for Windows 7', () => {
        userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.77 Safari/535.7';
        os = 'Windows';

        expect(detectOsVersion.get()).to.deep.eql({os: 'Windows', version: '7'});
    });

    it('Should return version for Windows 8', () => {
        userAgent = 'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240';
        os = 'Windows';

        expect(detectOsVersion.get()).to.deep.eql({os: 'Windows', version: '8'});
    });

    it('Should return version for Windows 8.1', () => {
        userAgent = 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; TNJB; rv:11.0) like Gecko';
        os = 'Windows';

        expect(detectOsVersion.get()).to.deep.eql({os: 'Windows', version: '8.1'});
    });

    it('Should return version for Windows 10', () => {
        userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 AOL/9.8 AOLBuild/4346.2019.US Safari/537.36';
        os = 'Windows';

        expect(detectOsVersion.get()).to.deep.eql({os: 'Windows', version: '10'});
    });
});