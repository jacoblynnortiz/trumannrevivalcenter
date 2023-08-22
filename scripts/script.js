var menu = document.getElementById('menu');

var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');
var link4 = document.getElementById('link4');
var link5 = document.getElementById('link5');

menu.onclick = function() {
	menu.classList.toggle('openmenu');
}

link1.onclick = function() {
	menu.classList.toggle('openmenu');
	$('ul').toggleClass('show');
}

link2.onclick = function() {
	menu.classList.toggle('openmenu');
	$('ul').toggleClass('show');
}

link3.onclick = function() {
	menu.classList.toggle('openmenu');
	$('ul').toggleClass('show');
}

link4.onclick = function() {
	menu.classList.toggle('openmenu');
	$('ul').toggleClass('show');
}

link5.onclick = function() {
	menu.classList.toggle('openmenu');
	$('ul').toggleClass('show');
}


$(document).ready(function() {
	$('#icon').click(function() {
	$('ul').toggleClass('show');
});
});

	$(document).ready(function(){     	
	$('body').find('img[src$="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"]').remove();
}); 