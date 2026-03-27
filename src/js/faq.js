const faqList = document.querySelector('.faq-list');
const handleFaqBtn = e => {
  const button = e.target.closest('.faq-button');
  if (!button) return;

  const faqItem = button.closest('.faq-item');
  faqItem.classList.toggle('is-open');

  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isExpanded);
};
faqList.addEventListener('click', handleFaqBtn);
