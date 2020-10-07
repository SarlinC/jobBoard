$(function() {
    $('#reg_success').hide();

    $('#companies').hide();

    let is_recruteur = 0;

    $('[name="is_recruiter"]').on('change', function() {
        if($('[name="is_recruiter"]')[0].checked) {
            is_recruteur = 0;
            $('#companies').hide();
            $('#companieName_id').removeAttr('required');
        }
        else {
            is_recruteur = 1;
            $('#companies').show();
            $('#companieName_id').attr('required', 'true');
        }
    });

    $('#reg_form').on('submit', function() {
        $('#reg_form').hide();
        $('#reg_success').show();

        let firstName = $('#first_name_id').val();
        let lastName = $('#last_name_id').val();
        let email_string = $('#email_id').val();
        let pwd_string = $('#pwd_id').val();

        let companieName;

        if (is_recruteur == 1) {
            companieName = $('#companieName_id').val();
        }

        axios.post('http://localhost:3000/register', {
            firstName: firstName,
            lastName: lastName,
            email_string: email_string,
            pwd_string: pwd_string,
            is_recruteur: is_recruteur,
            companieName: companieName
        })
        .then( response => {
            console.log(response.data);
        })
        .catch( err => {
            console.log(err);
        });

        return false;
    });
});