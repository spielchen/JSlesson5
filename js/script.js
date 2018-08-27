let menuLi = document.getElementsByClassName('menu-item'),
		newLi = document.createElement('li'),
		menu = document.querySelector('.menu'),
		title = document.getElementById('title'),
		adv = document.querySelector('.adv'),
		comment = document.getElementsByClassName('prompt')[0];

	menu.appendChild(newLi);
	newLi.innerHTML = 'Пятый пункт';
	newLi.classList.add('menu-item');
	menu.insertBefore(menuLi[2], menuLi[1]);
	document.body.style.background = 'url(./img/apple_true.jpg) center no-repeat';
	title.innerHTML = 'Мы продаем только подлинную технику Apple';
	adv.remove();
	var textPrompt = prompt('Ваше отношение к технике Apple');
	comment.textContent = textPrompt;
