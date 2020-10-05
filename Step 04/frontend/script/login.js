$(function() {

    $('#log_form').on('submit', function() {
        let email = $('#email_id').val();
        let password = $('#pwd_id').val();

        axios.post('http://localhost:3000/login', {
            email: email,
            password: password
        }).then( response => {
            console.log(response.data);
        }).catch( err => {
            console.log(err);
        });

        return false;
    });

});