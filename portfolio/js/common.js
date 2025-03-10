$(document).ready(function() {
    $('.mb-btn').click(function() {
        $(this).toggleClass('active')
        $('.mb-menu').toggleClass('active');
    });
});