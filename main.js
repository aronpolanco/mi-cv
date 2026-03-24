const btnLang = document.getElementById('btn-lang');
const cvEs = document.getElementById('cv-es');
const cvEn = document.getElementById('cv-en');

btnLang.addEventListener('click', () => {
    if (cvEs.classList.contains('active')) {
        // Español a Inglés
        cvEs.classList.remove('show'); 
        
        setTimeout(() => {
            cvEs.classList.remove('active');
            cvEn.classList.add('active'); 
            
            // Pequeño timeout para asegurar que el display:flex se aplique antes del opacity:1
            setTimeout(() => {
                cvEn.classList.add('show');
            }, 50);
            
            btnLang.textContent = 'Ver en Español';
        }, 400); // 400ms = 0.4s (El tiempo de la transición CSS)
        
    } else {
        // Inglés a Español
        cvEn.classList.remove('show');
        
        setTimeout(() => {
            cvEn.classList.remove('active');
            cvEs.classList.add('active');
            
            setTimeout(() => {
                cvEs.classList.add('show');
            }, 50);
            
            btnLang.textContent = 'View in English';
        }, 400);
    }
});
const mobileMenuBtn = document.getElementById('mobile-menu-btn');

// Función para abrir/cerrar menú en móvil
mobileMenuBtn.addEventListener('click', () => {
    // Buscamos la versión que esté activa (es o en)
    const activeSidebar = document.querySelector('.cv-version.active .sidebar');
    activeSidebar.classList.toggle('open');
    
    // Cambiamos el icono de hamburguesa por una X
    mobileMenuBtn.textContent = activeSidebar.classList.contains('open') ? '✕' : '☰';
});

// Cerrar menú al hacer clic en un enlace (opcional)
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.sidebar.open')?.classList.remove('open');
        mobileMenuBtn.textContent = '☰';
    });
});
