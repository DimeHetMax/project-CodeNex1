import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
  duration: 3000,
  position: { x: 'right', y: 'top' },
});

const contactForm = document.querySelector('.contacts-form');

const handleContactForm = e => {
  e.preventDefault();
  const form = e.target.elements;
  const userName = form.name.value;
  notyf.success(`Hey ${userName}, we'll contact you soon.`);
  contactForm.reset();
};
contactForm.addEventListener('submit', handleContactForm);
console.log();
