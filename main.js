const btnLang = document.getElementById('btn-lang');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const cvEs = document.getElementById('cv-es');
const cvEn = document.getElementById('cv-en');

btnLang.addEventListener('click', () => {
    if (cvEs.classList.contains('active')) {
        cvEs.classList.remove('show'); 
        setTimeout(() => {
            cvEs.classList.remove('active');
            cvEn.classList.add('active'); 
            document.title = "Aron Polanco — Resume";
            setTimeout(() => {
                cvEn.classList.add('show');
            }, 50);
            btnLang.textContent = 'Ver en Español';
        }, 400);
    } else {
        cvEn.classList.remove('show');
        setTimeout(() => {
            cvEn.classList.remove('active');
            cvEs.classList.add('active');
            document.title = "Aron Polanco — CV";
            setTimeout(() => {
                cvEs.classList.add('show');
            }, 50);
            btnLang.textContent = 'View in English';
        }, 400);
    }
});

mobileMenuBtn.addEventListener('click', () => {
    const activeSidebar = document.querySelector('.cv-version.active .sidebar');
    if (activeSidebar) {
        activeSidebar.classList.toggle('open');
        mobileMenuBtn.textContent = activeSidebar.classList.contains('open') ? '✕' : '☰';
    }
});

document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        const openSidebar = document.querySelector('.sidebar.open');
        if (openSidebar) {
            openSidebar.classList.remove('open');
            mobileMenuBtn.textContent = '☰';
        }
    });
});
const btnPdf = document.getElementById('btn-pdf');

btnPdf.addEventListener('click', () => {
    window.print();
});
