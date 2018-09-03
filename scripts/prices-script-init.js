/*const n = 100;

for (let i = 0; i < n; i++) {
	console.log('Hello world ' + (i + 1));
}*/


const detailsBtns = document.getElementsByClassName('card__details-button');
for(let i = 0; i < detailsBtns.length; i++) {
	detailsBtns[i].addEventListener('click', (event) => {
		const card = detailsBtns[i].parentNode;
		const detailsBox = card.getElementsByClassName('card__details')[0];
		detailsBox.style.display = detailsBox.style.display == 'inline' ? 'none' : 'inline';
	});
};

