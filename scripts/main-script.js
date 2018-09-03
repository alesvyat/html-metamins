const addBtn = document.getElementById('click-this-shit-button');
addBtn.addEventListener('click', (event) => {
	let message = document.getElementById('text-input');
	msgVal = message.value;

	console.log('Message:');
	console.log(msgVal);

	message.value = '';

	const section = addBtn.parentNode;
	
	let textArea = document.createElement('p');
	textArea.innerHTML = msgVal;
	textArea.class = 'section__comment';

	section.appendChild(textArea);

});