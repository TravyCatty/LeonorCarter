$(document).ready(()=> {
    $(document).on('click', '.hamburger__menu', ()=> {
        $('.hamburger__menu, .menu__box').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $(document).on('click', '.header_list > li > a', e => {

        /* Вот этот отрезок не обязателен! */
        e.preventDefault();
        let url = $(e.target).attr('href');
        location.href = url;

        $('.hamburger__menu, .menu__box').removeClass('active');
        $('body').removeClass('lock');
    });
});