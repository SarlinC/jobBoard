$(function() {

    $('#reg_success').hide();

    $('#reg_form').on('submit', function() {
        $('#reg_form').hide();
        $('#reg_success').show();
    });
});