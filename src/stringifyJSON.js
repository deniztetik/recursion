// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result;
  if (Array.isArray(obj)) { // see if you can do this using reduce
  	result = '['
  	obj.forEach(function(ele, idx) {
  	  if (idx === 0) result += stringifyJSON(ele);
  	  else result += ',' + stringifyJSON(ele);
  	});
  	result += ']';
  } else if (typeof obj === 'object' && obj !== null) {
  	result = '{';
  	for (key in obj) {
  		var stringKey = stringifyJSON(key);
  		var stringValue = stringifyJSON(obj[key]);
  		if (stringKey.length > 0 && stringValue.length > 0) {
  			result += stringKey + ':' + stringValue + ',';
  		}
  	}
  	if (result.length > 2) result = result.slice(0, result.length - 1)
  	result += '}';
  } else if (typeof obj === 'string') {
  	result = '"' + obj + '"';
  } else if (typeof obj === 'function' 
  				|| typeof obj === 'symbol'
  				|| typeof obj === 'undefined') {
  	result = '';
  }
  else {
  	result = String(obj);
  }
  return result;
};