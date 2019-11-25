var $cardBox = document.getElementById('cardBox');
var $alert = document.getElementById('alert');

document.addEventListener('keydown', (e) => {
	if (!$alert.innerText || $alert.innerText !== 0) $alert.classList.add('hide');
	var keyCode = e.keyCode;
	$cardBox.innerText = keyCode;
});
