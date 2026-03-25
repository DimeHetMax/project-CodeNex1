import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
  duration: 3000,
  position: { x: 'right', y: 'top' },
});

const assortList = document.querySelector(".assortment-list")

const handleAssortBtn = (e)=>{
 const button = e.target.closest('.assortment-btn');
  if (!button) return;
 const card = button.closest('.assortment-item');
 const name = card.querySelector('.assortment-name').textContent;
  const price = card.querySelector('.assortment-price').textContent;
  notyf.success(` ${name}: ${price} added`);
}

assortList.addEventListener("click", handleAssortBtn)