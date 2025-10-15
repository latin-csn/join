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
 (function(){
  const path = window.location.pathname;
  const isHome = /(^\/$|index\.html$)/.test(path);
  if(!isHome) return;
 
  const bd = document.createElement('div');
  bd.className = 'modal-backdrop';
  bd.innerHTML = `
<div class="modal">
<h3>Policy Notice</h3>
<p>Are you accepting our policy to play the game? This notice is informational and does not block access.</p>
<div style="display:flex;gap:10px;flex-wrap:wrap">
<button class="btn" id="age-yes">Yes, Accept</button>
<button class="btn ghost" id="age-no">Close</button>
</div>
</div>`;
  document.body.appendChild(bd);
  bd.style.display='flex';
 
  function closeGate(){ bd.style.display='none'; bd.remove(); }  
  // ✅ Redirect when "Yes" is clicked
  bd.querySelector('#age-yes').addEventListener('click', CloseGate); // change to your target page
  });
 
  // ✅ Just close modal when "No" is clicked
  bd.querySelector('#age-no').addEventListener('click', closeGate);
})();

    (function(){
  const path = window.location.pathname;
  const isHome = /(^\/$|lander\.html$)/.test(path);
  if(!isHome) return;
 
  const bd = document.createElement('div');
  bd.className = 'modal-backdrop';
  bd.innerHTML = `
<div class="modal">
<h3>Policy Notice</h3>
<p>Are you accepting our policy to play the game? This notice is informational and does not block access.</p>
<div style="display:flex;gap:10px;flex-wrap:wrap">
<button class="btn" id="age-yes">Yes, Accept</button>
<button class="btn ghost" id="age-no">Close</button>
</div>
</div>`;
  document.body.appendChild(bd);
  bd.style.display='flex';
 
  function closeGate(){ bd.style.display='none'; bd.remove(); }  
  // ✅ Redirect when "Yes" is clicked
  bd.querySelector('#age-yes').addEventListener('click', CloseGate);
  //                                               function(){
  //   window.location.href = "https://p8r9.com/?utm_campaign=ttN5oc1jmM&v1=[v1]&v2=[v2]&v3=[v3]"; // change to your target page
  // });
 
  // ✅ Just close modal when "No" is clicked
  bd.querySelector('#age-no').addEventListener('click', closeGate);
})();
