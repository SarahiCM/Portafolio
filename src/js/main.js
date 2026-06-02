const toggle = document.getElementById('nav-toggle');
const links  = document.getElementById('nav-links');

toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Forzar descarga del CV en lugar de abrirlo en el navegador
const cvBtn = document.querySelector('a[href="/CV_SarahiCaloso.pdf"]');
if (cvBtn) {
  cvBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const res = await fetch('/CV_SarahiCaloso.pdf');
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV_SarahiCaloso.pdf';
    a.click();
    URL.revokeObjectURL(url);
  });
}

// LIGHTBOX
const overlay = document.createElement('div');
overlay.className = 'lightbox-overlay';
overlay.innerHTML = `
  <button class="lightbox-close"><i class="ti ti-x"></i></button>
  <img class="lightbox-img" src="" alt="" />
`;
document.body.appendChild(overlay);

const lbImg = overlay.querySelector('.lightbox-img');

document.querySelectorAll('.gallery img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    overlay.classList.add('open');
  });
});

overlay.addEventListener('click', e => {
  if (e.target === overlay || e.target.closest('.lightbox-close')) {
    overlay.classList.remove('open');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') overlay.classList.remove('open');
});