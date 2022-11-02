$(document).ready(function () {
    $('#tag1, #tag2').css("background-color", "yellow");
    $('#welcome_message').text("Hello Welcome To My Lovely Page");
    $('p').on('click', function () {
        $(this).hide();
    });
    $('#hide_button').on('click', function () {
        $('#tag1').hide();
    });
    $('#show_button').on('click', function () {
        $('#tag1').show();
    });
    $('#toggle_button').on('click', function () {
        $('#tag2').toggle();
    });
    $('#name_button').on('click', function () {
        $('#name').text("Areej Ahmed");

    });
});