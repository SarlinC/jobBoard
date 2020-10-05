$(function() {

    $('#login_container').show();
    $('#login_fail').hide();
    $('#login_success').hide();


    $('#log_form').on('submit', function() {
        let email = $('#email_id').val();
        let password = $('#pwd_id').val();

        axios.post('http://localhost:3000/login', {
            email: email,
            password: password
        }).then( response => {
            console.log(response.data);
            if(response.data === false) {
                $('#login_container').hide();
                $('#login_fail').show();
            }
            else {
                $('#login_container').hide();
                $('#login_success').show();
            }
        }).catch( err => {
            console.log(err);
        });

        return false;
    });

});