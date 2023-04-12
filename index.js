const menuIcon = document.querySelector('.menu');
const ulMenu = document.querySelector('ul');
const closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('click', () => {
	ulMenu.style.right = 0;
});

closeIcon.addEventListener('click', () => {
	ulMenu.style.right = '-100%';
});
