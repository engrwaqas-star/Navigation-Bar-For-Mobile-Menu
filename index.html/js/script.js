const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
function closeMenu() {
	navLinks.classList.remove('open');
	menuButton.setAttribute('aria-expanded', 'false');
	menuButton.setAttribute('aria-label', 'Open navigation');
	menuButton.textContent = '\u2630';
}
menuButton.addEventListener('click', () => {
	const isOpen = navLinks.classList.toggle('open');
	menuButton.setAttribute('aria-expanded', isOpen);
	menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
	menuButton.textContent = isOpen ? '\u00d7' : '\u2630';
});
navLinks.addEventListener('click', (event) => {
	if (event.target.tagName === 'A') closeMenu();
});
