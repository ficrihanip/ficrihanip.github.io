$(document).ready(function () {
    /**
     * Navbar :
     * - Ketika diklik akan menghapus class active sebelumnya 
     * dan menambahkan class active pada class saat.
     */
    $('.nav-link').click(function () {
        $('.nav-link.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.navbar-toggler').click(function () {
        $('.navbar').addClass('not-show-disabled');
    });

    let prevScrollPos = 0;

    function transition(a) {
        let currentScrollPos = $(window).scrollTop();
        if (prevScrollPos > currentScrollPos) {
            $('.navbar').removeClass(a);
        } else {
            $('.navbar').addClass(a);
        }
        prevScrollPos = currentScrollPos;
    };
    $(window).scroll(function () {
        if ($('.navbar-toggler').attr('aria-expanded') === "true") {
            console.log('1');
            transition('not-show-disabled');
        } else {
            $('.navbar').removeClass('not-show-disabled');
            transition('not-show');
        }
    });


    /**
     * Banner :
     * - Perulangan menambahkan element image banner pada
     * dom.
     */
    let firstBanner = $('.carousel-item.active');
    for (let i = 2; i <= 14; i++) firstBanner.before(`<div class="carousel-item" data-bs-interval="100"><img src="./asset/image/banner/img_banner-${i}.png" class="d-block w-100" alt="banner-${i}"></div>`);
    for (let i = 14; i >= 2; i--) firstBanner.before(`<div class="carousel-item" data-bs-interval="100"><img src="./asset/image/banner/img_banner-${i}.png" class="d-block w-100" alt="banner-${i}"></div>`);

    /**
     * Profil :
     * - Menghilangkan efek filter grayscale pada css
     */
    $('.image-profil').mouseover(function () {
        $(this).css({
            'filter': 'none'
        });
    }).mouseout(function () {
        $(this).css({
            'filter': 'grayscale(1)'
        });
    });

    /**
     * Sertif :
     * - Perulangan menambahkan element accordion pada dom.
     */
    const dataArrSertif = ['PROGATE - HTML&CSS', 'PROGATE - JAVASCRIPT', 'PROGATE - SQL', 'PROGATE - GIT', 'PROGATE - COMMAND LINE', 'MSIB PROGATE BATCH 1 2020 - INTRO TO WEB DEVELOPMENT', 'MSIB PROGATE BATCH 1 2020 - JUNIOR WEB DEVELOPER'];
    const parentDivSertif = $('section.section.sertif div.container div.row.mb-4');
    $.each(dataArrSertif, function (index, value) {
        let a = index + 1;
        $(parentDivSertif).after(`<div class="row">
                <div class="col-md-12 mb-2 mb-md-2 mb-lg-2 mb-xl-2 mb-xxl-2">
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item alert-dark">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button alert-dark fw-bold collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panel-${a}" aria-expanded="true"
                                    aria-controls="panel-${a}">
                                    ${value}
                                </button>
                            </h2>
                            <div id="panel-${a}" class="accordion-collapse collapse" aria-labelledby="headingOne">
                                <div class="accordion-body">
                                    <!-- card here -->
                                    <img class="image-sertif" src="./asset/image/sertifikasi/img_${a}.webp" alt=image-${a}">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);
    });
});