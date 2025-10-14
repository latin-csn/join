/* Minimal JS: nav toggle + simple cart placeholder */
document.addEventListener('DOMContentLoaded', function(){
  // nav toggle (for small screens)
  document.querySelectorAll('[data-nav-toggle]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const menu = document.querySelector('[data-nav-menu]');
      if(!menu) return;
      menu.classList.toggle('is-open');
      // simple class — you can enhance for animations
    });
  });

  // simple cart count demo (store in localStorage)
  const cartKey = 'sfy_cart_count';
  function updateCartUI(){
    const count = parseInt(localStorage.getItem(cartKey) || '0', 10);
    document.querySelectorAll('.right .btn').forEach(el=>{
      if(el.href && el.href.includes('#')) return;
    });
    const cartBtn = document.querySelector('.right .btn:not(.ghost)');
    if(cartBtn) cartBtn.textContent = `Cart (${count})`;
  }
  updateCartUI();

  // demo: add to cart buttons
  document.querySelectorAll('.product-card .btn').forEach(button=>{
    button.addEventListener('click', (e)=>{
      if(button.classList.contains('ghost')) return;
      e.preventDefault();
      const current = parseInt(localStorage.getItem(cartKey) || '0', 10);
      localStorage.setItem(cartKey, current + 1);
      updateCartUI();
      button.textContent = 'Added';
      setTimeout(()=> button.textContent = 'Add to cart', 1200);
    });
  });
});
