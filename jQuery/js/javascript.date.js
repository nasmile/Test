$(document).ready(function() {

	var y2k = new Date(Date.UTC(2000, 0));
	var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
	
	alert(y2k);
	alert(allFives);
})(window.jQuery);