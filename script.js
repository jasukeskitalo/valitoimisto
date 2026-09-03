const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.navigation a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#quote-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Tarjouspyyntö: ${data.get('service')}`);
  const body = encodeURIComponent(`Nimi: ${data.get('name')}\nSähköposti: ${data.get('email')}\nPalvelu: ${data.get('service')}\n\nViesti:\n${data.get('message')}`);
  window.location.href = `mailto:kirjanpito@valitoimisto.fi?subject=${subject}&body=${body}`;
});
