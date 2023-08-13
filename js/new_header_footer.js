$(() => {

    $('nav').hide();

    $('.new-grid-row').hover(
        function () {
            $('nav').stop().slideDown();
        },
        function () {
            $('nav').stop().slideUp();
        }
    );
});