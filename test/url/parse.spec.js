import {expect} from 'chai';
import parseUrl from '../../src/url/parse';

describe('parseUrl', () => {
  it('should return an object with a defined href property when a url is passed', () => {
    var url = 'http://www.example.com/sample/path?user=john&type=administrator#sample';

    var object = parseUrl(url);

    expect(object.href).to.equal(url);
  });

  it('should return an object with a defined searchParams property when url contains a single parameter', () => {
    var url = 'http://www.example.com/sample/path?user=john';
    var object = parseUrl(url);

    expect(object.searchParams).to.not.be.undefined;
    expect(object.searchParams.user).to.equal('john');
  });

  it('should return an object with a defined searchParams property when url contains multiple parameters', () => {
    var url = 'http://www.example.com/sample/path?user=john&type=administrator#sample';
    var object = parseUrl(url);

    expect(object.searchParams).to.not.be.undefined;
    expect(object.searchParams.user).to.equal('john');
    expect(object.searchParams.type).to.equal('administrator');
  });

  it('should return an object with an empty searchParams property when the url has no query string', () => {
    var url = 'http://www.example.com/sample/path';
    var object = parseUrl(url);

    expect(object.searchParams).to.equal('');
  });


  it('should return an object with a defined hash property when a url is passed with a #', () => {
    var url = 'http://www.example.com/sample/path?user=john&type=administrator#sample';

    var object = parseUrl(url);

    expect(object.hash).to.equal('#sample');
  });

  it('should return an object with an empty hash property when a url is passed without a #', () => {
    var url = 'http://www.example.com/sample/path?user=john&type=administrator';

    var object = parseUrl(url);

    expect(object.hash).to.equal('');
  });

  it('should return an object with a defined query property when a url is passed with a query string', () => {
    var url = 'http://www.example.com/sample/path?user=john&type=administrator';

    var object = parseUrl(url);

    expect(object.search).to.equal('?user=john&type=administrator');
  });

  it('should return an object with an empty query property when a url is passed without a query string', () => {
    var url = 'http://www.example.com/sample/path';

    var object = parseUrl(url);

    expect(object.search).to.equal('');
  });

  it('should return an object with a correctly defined protocol property for http', () => {
    var http = 'http://www.example.com/sample/path';

    var httpObject = parseUrl(http);

    expect(httpObject.protocol).to.equal('http:');
  });

  it('should return an object with a correctly defined protocol property for https', () => {
    var https = 'https://bitsrc.io';
    var file = 'file://host/path';

    var httpsObject = parseUrl(https);

    expect(httpsObject.protocol).to.equal('https:');
  });

  it('should return an object with a correctly defined protocol property for ftp', () => {
    var ftp = 'ftp://ftp.funet.fi/pub/standards/RFC/rfc959.txt';

    var ftpObject = parseUrl(ftp);
    
    expect(ftpObject.protocol).to.equal('ftp:');
  });

  it('should return an object with a correctly defined protocol property for file', () => {
    var file = 'file://host/path';
    var fileObject = parseUrl(file);

    expect(fileObject.protocol).to.equal('file:');
  });

  it('should return an object with a default protocol of http if url does not contain a protocol', () => {
    var url = 'www.example.com';

    var object = parseUrl(url);

    expect(object.protocol).to.equal('http:');
  });

  it('should return an object with properly formatted host when a url is passed with specific port', () => {
    var url = 'http://www.example.com:8080/sample/path';

    var object = parseUrl(url);

    expect(object.host).to.equal('www.example.com:8080');
  });

  it('should return an object with properly formatted hostname when a url is passed with www', () => {
    var url = 'http://www.example.com/sample/path';

    var object = parseUrl(url);

    expect(object.hostname).to.equal('www.example.com');
  });

  it('should return an object with properly formatted hostname when a url is passed without www', () => {
    var url = 'http://example.com/sample/path';

    var object = parseUrl(url);

    expect(object.hostname).to.equal('example.com');
  });

  it('should return an object with a defined path property when a url is passed with a path', () => {
    var url = 'http://www.example.com/sample/path/image.jpg';

    var object = parseUrl(url);

    expect(object.path).to.equal('/sample/path/image.jpg');
  });

  it('should return an object with an empty path property when a url is passed without a path', () => {
    var url = 'http://www.example.com/';

    var object = parseUrl(url);

    expect(object.path).to.equal('');
  });

  it('should return an object with an empty port property when a url is passed without a specified port', () => {
    var url = 'http://www.example.com/';

    var object = parseUrl(url);

    expect(object.port).to.equal('');
  });
  it('should return an object with an defined port property when a url is passed with a specified port', () => {
    var url = 'http://www.example.com:8080/';

    var object = parseUrl(url);

    expect(object.port).to.equal('8080');
  });
});