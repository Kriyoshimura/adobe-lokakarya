// Tunggu hingga seluruh halaman HTML dimuat sebelum menjalankan skrip
document.addEventListener("DOMContentLoaded", () => {
    const INCREMENT_COUNT = 9;
    const allCards = document.querySelectorAll('.product-grid .container .product-card');
    const totalCards = allCards.length;
    const loadMoreBtn = document.getElementById('load-more-btn');

    let visibleCount = INCREMENT_COUNT;

    if (totalCards <= visibleCount) {
        loadMoreBtn.style.display = 'none';
    }
        function updateVisibility() {
        for (let i = 0; i < totalCards; i++) {
            
            if (i < visibleCount) {
                allCards[i].classList.remove('product-hidden');
            } else {
                allCards[i].classList.add('product-hidden');
            }
        }

        if (visibleCount >= totalCards) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }

    loadMoreBtn.addEventListener('click', () => {
        visibleCount += INCREMENT_COUNT;
        updateVisibility();
    });

    updateVisibility();

    const filterToggleBtn = document.querySelector('.filter-toggle-btn');
    const filterMenuWrapper = document.querySelector('.filter-menu-wrapper');

    // Pastikan elemen ada sebelum menambah event listener
    if (filterToggleBtn && filterMenuWrapper) {
        
        filterToggleBtn.addEventListener('click', () => {
            // Toggle class pada wrapper menu (untuk menampilkan/menyembunyikan)
            filterMenuWrapper.classList.toggle('filter-menu-open');
            
            // Toggle class pada tombol (untuk ganti ikon hamburger/close)
            filterToggleBtn.classList.toggle('menu-open');
            
            // Update atribut ARIA untuk accessibility
            const isExpanded = filterMenuWrapper.classList.contains('filter-menu-open');
            filterToggleBtn.setAttribute('aria-expanded', isExpanded);
        });
    }
    
});