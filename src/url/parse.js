/**
 * @bit
 * @name parseUrl
 * @description Creates an object from the given url. If any property doesn't exist in the provided url its value will be an empty string.
 * @param {string} url The url to parse
 * @returns {object} the parsed url object
 * @example
 * var url = parseUrl('http://www.example.com:80/sample/path?user=john&type=administrator#sample') 
 *  
 * url.href          // => 'http://www.example.com:80/sample/path?user=john&type=administrator#sample'
 * url.searchParams  // => { user: 'john', type: 'administrator' }
 * url.hash          // => '#sample'
 * url.search        // => '?user=john&type=administrator'
 * url.protocol      // => 'http:'
 * url.hostname      // => 'www.example.com'
 * url.host          // => 'www.example.com:80'
 * url.path          // => '/sample/path/'
 * url.port          // => '80'
 */
export default function parseUrl(url) {
	
	var urlObject = {};
	urlObject.href = url;

	var hashDivision = url.split('#');
	var withoutHash = hashDivision[0];

	// If fragment identifier (#) exists, add it to object
	if (hashDivision.length > 1) {
		urlObject.hash = '#' + hashDivision[1];
	} else {
		urlObject.hash = '';
	}

	// Divide into base url/path and query string
	var hostDivision = withoutHash.split('?');
	var withoutQuery = hostDivision[0];
	
	// If query string exists, add the parameters to searchParams object
	var searchParams = '';
	urlObject.search = '';

	if (hostDivision.length > 1) {
		searchParams = {};

		// Add full query string to object
		urlObject.search = '?' + hostDivision[1];

		// Divide into parameters array
		var paramDivision = hostDivision[1].split('&');

		// Iterate over parameters
		for (var i = 0; i < paramDivision.length; i++) {
			var equalDivision = paramDivision[i].split('=');
			var key = equalDivision[0];						
			var value = equalDivision[1];
				
			searchParams[key] = value;
		}
	}

	urlObject.searchParams = searchParams;

	// Divide into host and base url/path sections
	var protocolDivision = withoutQuery.split('//');

	// If no protocol was in url, default to http:
	if (protocolDivision.length == 1) {
		protocolDivision[1] = protocolDivision[0];
		protocolDivision[0] = 'http:';
	}

	var protocol = protocolDivision[0];
	var withoutProtocol = protocolDivision[1];

	// Add protocol to object						
	urlObject.protocol = protocol;

	// Divide into base url and path sections
	var pathDivision = withoutProtocol.split('/');

	// Edge case for '/' ending causing empty item
	if (pathDivision[pathDivision.length - 1] === '') {
		pathDivision = pathDivision.slice(0, pathDivision.length - 1);
	}

	// Set host
	var host = pathDivision[0];
	urlObject.host = host;

	// Divide into hostname and port sections
	var portDivision = host.split(':');

	// Set default port (empty means 80)
	var port = '';

	if (portDivision.length > 1) {
		port = portDivision[1];
	}

	urlObject.port = port;

	// Save hostname to object
	urlObject.hostname = portDivision[0];

	// Reconstruct path
	if (pathDivision.length > 1) {
		var path = '';
		for (var i = 1; i < pathDivision.length; i++) {
			path += '/' + pathDivision[i];
		}

		// Add path to object
		urlObject.path = path;
	} else {
		urlObject.path = '';
	}

	return urlObject;
};