const menuIcon = document.querySelector('.menu');
const ulMenu = document.querySelector('.menu-list');
const closeIcon = document.querySelector('.close-icon');
const overlay = document.getElementById('overlay');

menuIcon.addEventListener('click', () => {
	ulMenu.style.right = 0;
	overlay.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
	ulMenu.style.right = '-100%';
	overlay.style.display = 'none';
});
