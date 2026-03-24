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
document.getElementById('download-btn').addEventListener('click', () => {
    const element = document.querySelector('.cv-version.active');
    const isEs = document.getElementById('cv-es').classList.contains('active');
    const fileName = isEs ? 'CV_Aron_Polanco.pdf' : 'Resume_Aron_Polanco.pdf';

    const opt = {
        margin: 0,
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true, 
            letterRendering: true 
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
});
