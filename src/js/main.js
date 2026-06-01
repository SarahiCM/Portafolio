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