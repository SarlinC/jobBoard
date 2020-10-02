

$(function() {

    $('#reg_success').hide();

    $('#reg_form').on('submit', function() {
        $('#reg_form').hide();
        $('#reg_success').show();

        let firstName = $('#first_name_id').val();
        let lastName = $('#last_name_id').val();
        let email_string = $('#email_id').val();
        let pwd_string = $('#pwd_id').val();
        let is_recruteur;

        if($('[name="is_recruiter"]')[0].checked) {

            is_recruteur = 1;
        }
        else {
            is_recruteur = 0;
        }

        axios.post('http://localhost:3000/register', {
            firstName: firstName,
            lastName: lastName,
            email_string: email_string,
            pwd_string: pwd_string,
            is_recruteur: is_recruteur
        })
        .then( response => {
            console.log(response.data);
        })
        .catch( err => {
            console.log(err);
        })

        return false;
    });

});