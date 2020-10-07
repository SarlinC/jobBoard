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
            console.log(response.data[1][0].isRecruteur);
            if(response.data[0] === false) {
                $('#login_container').hide();
                $('#login_fail').show();
            }
            else {
                $('#login_container').hide();
                $('#login_success').show();

                document.cookie = `isRecruteur=${response.data[1][0].isRecruteur}`;
            }
        }).catch( err => {
            console.log(err);
        });

        return false;
    });

});