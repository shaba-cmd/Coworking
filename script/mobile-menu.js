document.addEventListener('DOMContentLoaded', function () {
    const btnOpenMenu = document.querySelector('.header__mobile-menu');
    const btnCloseMenu = document.querySelector('.header__menu-exit');
    const mobileMenuEl = document.querySelector('.header__menu-mobile');

    btnOpenMenu.addEventListener('click', function () {
        mobileMenuEl.classList.add('header__mobile-menu_display');
    });

    btnCloseMenu.addEventListener('click', function () {
        mobileMenuEl.classList.remove('header__mobile-menu_display');
    });

    document.addEventListener('click', function (e) {
        if (mobileMenuEl.classList.contains('header__mobile-menu_display') &&
            !mobileMenuEl.contains(e.target) &&
            !btnOpenMenu.contains(e.target)) {
            mobileMenuEl.classList.remove('header__mobile-menu_display');
        }
    });
});