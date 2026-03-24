const btnLang = document.getElementById('btn-lang');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const cvEs = document.getElementById('cv-es');
const cvEn = document.getElementById('cv-en');

btnLang.addEventListener('click', () => {
    const isEs = cvEs.classList.contains('active');
    const toHide = isEs ? cvEs : cvEn;
    const toShow = isEs ? cvEn : cvEs;

    toHide.classList.remove('show');
    setTimeout(() => {
        toHide.classList.remove('active'); // Aquí es donde desaparece el espacio
        toShow.classList.add('active');    // Aquí es donde aparece el nuevo
        document.title = isEs ? "Aron Polanco — Resume" : "Aron Polanco — CV";
        btnLang.textContent = isEs ? "Ver en Español" : "View in English";
        setTimeout(() => toShow.classList.add('show'), 50);
    }, 400);
});

mobileMenuBtn.addEventListener('click', () => {
    const sidebar = document.querySelector('.cv-version.active .sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
        mobileMenuBtn.textContent = sidebar.classList.contains('open') ? '✕' : '☰';
    }
});

document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar.open');
    if (sidebar && !sidebar.contains(e.target) && e.target !== mobileMenuBtn) {
        sidebar.classList.remove('open');
        mobileMenuBtn.textContent = '☰';
    }
});
