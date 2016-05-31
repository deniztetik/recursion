// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];
  	function classCheck(node) {
  	var nodes = node.childNodes
	  	if (node.classList && node.classList.contains(className)) {
	  	  results.push(node);
	  	}
	  	for (var i = 0; i < nodes.length; i++) {
	  	  classCheck(nodes[i]);
	  	}
  	}
  classCheck(document.body);
  return results;
};
