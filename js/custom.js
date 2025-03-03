window.addEventListener('load', () => {
    const loader = document.querySelector('.loader')
    const body = document.querySelector('.home')

    loader.classList.add('loader-hidden');
    body.classList.remove('loader-hidden');

    loader.addEventListener('transitionend', () => {
        document.body.removeChild("loader")
    })

})

$(document).ready(function () {

    function toggleManuPanal() {
        const menuToggle = document.querySelector(".toggle-btn");
        const search = document.querySelector("#search-icon");
        const setting = document.querySelector("#setting-icon");
        // const modal = document.querySelector(".modal");
        if (window.innerWidth > 769) {

            menuToggle.addEventListener("click", function () {
                document.querySelector("#sidebar").classList.toggle("expand");
            });
            search.addEventListener("click", function () {
                document.querySelector("#sidebar").classList.add("expand");
                // modal.style.width = `calc(100% - 300px)`; 
            });
            setting.addEventListener("click", function () {
                document.querySelector("#sidebar").classList.add("expand");
                // modal.style.width = `calc(100% - 300px)`; 
            });
        } else {
            document.querySelector("#sidebar").classList.add("expand");
            document.querySelector("#searchList").classList.add("close-menu");
            document.querySelector(".sidebar-nav").classList.add("close-menu");
            menuToggle.addEventListener("click", function () {
                document.querySelector("#searchList").classList.toggle("close-menu");
                document.querySelector("#searchList").classList.toggle("open-menu");
                document.querySelector(".sidebar-nav").classList.toggle("close-menu");
                document.querySelector(".sidebar-nav").classList.toggle("open-menu");
            });
        }
    }

    toggleManuPanal();

    // let isReloaded = false
    // window.addEventListener('resize', (() => {
    //     const isSmallScreen = window.innerWidth <= 769
    //     if (isSmallScreen && !isReloaded) {
    //         document.querySelector("#sidebar").classList.add("expand");
    //         window.location.reload()
    //         isReloaded = true;
    //     }
    // }));

    // open and close map details using jquery
    $(".pointer").click(function () {
        $('.card-details').removeClass("close-details")
    })

    // delete alert
    // alert add to favorite

    $(document).on('click', '.trash', function (e) {
        Swal.fire({
            title: 'هل انت متأكد؟',
            text: "لا يمكن التراجع عن هذا",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2E619E',
            cancelButtonColor: '#A61D21',
            confirmButtonText: 'نعم اريد المسح !',
            cancelButtonText: 'الغاء',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'مسح!',
                    'تم مسح الملف.',
                    'success',
                )
            }
        })

    });


    // toggle nav sort
    $('.sort-menu').hide();
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.sort-by').length) {
            $('.sort-menu').fadeOut('fast');

        }
    });
    // filter menu
    $('.sort-by').click(function (event) {
        // event.preventDefault();
        $('.sort-menu').fadeToggle('fast');


    })

    // toggle nav filter
    // fliter menu
    $('.filter-menu').hide();
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.filter-by').length) {
            $('.filter-menu').fadeOut('fast');

        }
    });
    // filter menu
    $('.filter-by').click(function (event) {
        // event.preventDefault();
        $('.filter-menu').fadeToggle('fast');
    })

    // user status
    $('.activeUsers').click(function () {
        $('.template-kinds li').removeClass('active');
        $(this).addClass('active')
        $('.readed').parents('tr').fadeIn('slow');
        $('.not-readed').parents('tr').fadeOut('fast');

    })
    $('.deactiveUsers').click(function () {
        $('.template-kinds li').removeClass('active');
        $(this).addClass('active')
        $('.not-readed').parents('tr').fadeIn('slow');
        $('.readed').parents('tr').fadeOut('fast');
    })

    $('.all').click(function () {
        $('.template-kinds li').removeClass('active');
        $(this).addClass('active')
        $('.not-readed').parents('tr').fadeIn('fast');
        $('.readed').parents('tr').fadeIn('fast');
    })

    //add question
    let rowCounter = 1;

    function addRow() {
        rowCounter++;
        const container = document.getElementById("row-container");
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.id = "question-" + rowCounter;
        newRow.innerHTML = `
        <hr>
            <div class="col-lg-6 col-12 mb-3">
                <div class="input-floating-label mb-0">
                    <input type="text" class="form-control">
                    <label>اسم الاختبار بالعربى</label>
                </div>
            </div>
            <div class="col-lg-5 col-11 mb-3" id="eng-choose-label">
                <div class="input-floating-label mb-0">
                    <input type="text" class="form-control" style="direction: ltr;">
                    <label class="eng">Choice in English</label>
                </div>
            </div>
            <div class="col-1" id="eng-choose-icon">
                <button type="button" class="trash-btn-form trash" id="delete-ques">
                    <img src="./images/trash-can-outline.png" alt="" class="trash">
                </button>
            </div>
            
        `;
        container.appendChild(newRow);
    }

    function deleteRow(btn) {
        const row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }

    $('#add-ques').click(() => {
        addRow();
    })

    // select2
    $('.form-select').select2({
        dir: 'rtl',
    })

    $('.send-company-select').select2({
        dropdownParent: $('#sendFormCompany')
    })

    $('.add-company-select').select2({
        dropdownParent: $('#addCompany')
    })

    $('.create-table-select').select2({
        dropdownParent: $('#createQuestion')
    })

    $('.email-select').select2({
        dropdownParent: $('#createMail')
    })
    $('.requestName').select2({
        dropdownParent: $('#requestName')
    })

// Toggle lang 
let enVersion = '<link rel="stylesheet" href="css/style-en.css">'
let ar = 'عربى'
let en = 'En'
let currentLang = $('.current-lang')
$('.second-lang').click(function(){
    $('head').append(enVersion)
    if(currentLang.text() == ar){
        currentLang.text(en)
        $(this).text(ar)
    }else if(currentLang.text(en)){
       $('link[href="css/style-en.css"]').remove()
        currentLang.text(ar)
        $(this).text(en)
      
    }
})
});


    // Modal Popup

        const modal = document.getElementById("myModal");
        const btn = document.getElementById("openModal");
        const span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    
    // pagination


    document.addEventListener('DOMContentLoaded', function() {
        const buildingsPerPage = 12;
        const buildings = document.querySelectorAll('.building');
        const totalBuildings = buildings.length;
        const totalPages = Math.ceil(totalBuildings / buildingsPerPage);
    
        const paginationContainer = document.querySelector('.inner-pages-container');
        let currentPage = 1;
    
        // show the nth set of 12 buildings based on the page number
        function showBuilding(page) {
            currentPage = page;
    
            // Hide all buildings
            buildings.forEach(building => {
                building.style.display = 'none';
            });
    
            // Show the buildings corresponding to the current page (12 per page)
            const start = (page - 1) * buildingsPerPage;
            const end = start + buildingsPerPage;
    
            for (let i = start; i < end && i < totalBuildings; i++) {
                buildings[i].style.display = 'flex'; 
            }
    
            // Update active pagination button
            updatePaginationButtons();
        }
    
        // create pagination buttons dynamically based on the number of buildings
        function createPaginationButtons() {
            for (let i = 1; i <= totalPages; i++) {
                const btn = document.createElement('button');
                btn.textContent = i;
                btn.classList.add('pagination-btn');
                if (i === 1) btn.classList.add('active-page');  // Make the first page active initially
                btn.dataset.page = i;
    
                // Add click event listener to switch buildings
                btn.addEventListener('click', function() {
                    showBuilding(parseInt(this.dataset.page, 10));
                });
    
                paginationContainer.appendChild(btn);
            }
        }


        const prevButton = document.querySelector('.pagination-btn.prev');
        const nextButton = document.querySelector('.pagination-btn.next');
        nextButton.addEventListener('click', function () {
            if (currentPage < totalPages) {
                showBuilding(currentPage + 1);
            }
        });
        prevButton.addEventListener('click', function () {
            if (currentPage > 1) {
                showBuilding(currentPage - 1);
            }
        });
                
    
        // update pagination button states
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
    
        // Initial setup
        createPaginationButtons();
        showBuilding(1);  // Show the first set of 12 buildings initially
    
    
    });


    document.addEventListener('DOMContentLoaded', function () {
        const rowsPerPage = 10; // Show 10 rows per page
        const rows = document.querySelectorAll('#table-body tr');
        const totalRows = rows.length;
        const totalPages = Math.ceil(totalRows / rowsPerPage);
        let currentPage = 1;
    
        const prevButton = document.querySelector('.pagination-btn.prev');
        const nextButton = document.querySelector('.pagination-btn.next');
        const pagesContainer = document.querySelector('.pages');
    
        function showPage(page) {
            currentPage = page;
    
            rows.forEach(row => {
                row.style.display = 'none';
            });
    
            const start = (page - 1) * rowsPerPage;
            const end = start + rowsPerPage;
    
            for (let i = start; i < end && i < totalRows; i++) {
                rows[i].style.display = 'table-row';
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
    
                btn.addEventListener('click', function () {
                    showPage(parseInt(this.dataset.page, 10));
                });
    
                pagesContainer.appendChild(btn);
            }
        }
    
        function updatePaginationButtons() {
            const buttons = document.querySelectorAll('.pagination-btn:not(.prev):not(.next)');
            buttons.forEach(button => {
                const page = parseInt(button.dataset.page, 10);
                if (page === currentPage) {
                    button.classList.add('active-page');
                } else {
                    button.classList.remove('active-page');
                }
            });
        }
    
        nextButton.addEventListener('click', function () {
            if (currentPage < totalPages) {
                showPage(currentPage + 1);
            }
        });
    
        prevButton.addEventListener('click', function () {
            if (currentPage > 1) {
                showPage(currentPage - 1);
            }
        });
    
        createPaginationButtons();
        showPage(1);
    });
    