
document.addEventListener('DOMContentLoaded', function() {
    const unitsPerPage = 4;
    const units = document.querySelectorAll('.tenant-info-box');
    const totalUnits = units.length;
    const totalPages = Math.ceil(totalUnits / unitsPerPage);
    const paginationContainer = document.querySelector('.inner-pages-container');
    let currentPage = 1;

    function showUnit(page) {
        currentPage = page;

        units.forEach(unit => {
            unit.style.display = 'none';
        });

        const start = (page - 1) * unitsPerPage;
        const end = start + unitsPerPage;

        for (let i = start; i < end && i < totalUnits; i++) {
            units[i].style.display = 'block'; 
        }

        updatePaginationButtons();
    }

    function createPaginationButtons() {
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.classList.add('pagination-btn');
            if (i === 1) btn.classList.add('active-page'); 
            btn.dataset.page = i;

            btn.addEventListener('click', function() {
                showUnit(parseInt(this.dataset.page, 10));
            });

            paginationContainer.appendChild(btn);
        }
    }


    const prevButton = document.querySelector('.pagination-btn.prev');
    const nextButton = document.querySelector('.pagination-btn.next');
    nextButton.addEventListener('click', function () {
        if (currentPage < totalPages) {
            showUnit(currentPage + 1);
        }
    });
    prevButton.addEventListener('click', function () {
        if (currentPage > 1) {
            showUnit(currentPage - 1);
        }
    });
            

    function updatePaginationButtons() {
        const buttons = document.querySelectorAll('.pagination-btn');
        buttons.forEach(button => {
            const page = parseInt(button.dataset.page, 10);
            if (page === currentPage) {
                button.classList.add('active-page');
            } else {
                button.classList.remove('active-page');
            }
        });
    }

    createPaginationButtons();
    showUnit(1);  
});