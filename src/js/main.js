const sandwich = function () {
	const sandwichButton = document.querySelector('.sandwich__open-btn');
	const sandwichClose = document.querySelector('.sandwich__close-btn');
	const content = document.querySelector('.sandwich__content');
	const menu = document.querySelector('.sandwich__menu');

	sandwichButton.addEventListener('click', () => {
		menu.classList.add('sandwich__menu--opened');
		content.classList.add('sandwich__content--active');
		document.body.style.overflow = 'hidden';
	});

	content.addEventListener('click', function () {
		menu.classList.remove('sandwich__menu--opened');
		this.classList.remove('sandwich__content--active');
		document.body.style.overflow = 'visible';
	});

	sandwichClose.addEventListener('click', () => {
		menu.classList.remove('sandwich__menu--opened');
		content.classList.remove('sandwich__content--active');
		document.body.style.overflow = 'visible';
	});
};

sandwich();

const acc = document.getElementsByClassName('main-nav__header');
let i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		/* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
		this.classList.toggle('main-nav__header--active');

		/* Toggle between hiding and showing the active panel */
		const panel = this.nextElementSibling;
		if (panel.style.display === 'block') {
			panel.style.display = 'none';
		} else {
			panel.style.display = 'block';
		}
	});
}
