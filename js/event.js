

$(() => {

    $('.new-stickyCategory').hide();

    $('.new-grid-row').hover(
        function () {
            $('.new-stickyCategory').stop().slideDown();
        },
        function () {
            $('.new-stickyCategory').stop().slideUp();
        }
    );
});