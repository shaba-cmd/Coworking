document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('click', function (e) {
        e.preventDefault();

        const anchor = e.target.closest('a[href*="#"]');

        const blockId = anchor.getAttribute('href').substring(1);
        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });
});