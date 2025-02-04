$(function() {

    axios.post('http://localhost:3000/adminSelect').then((response) => {

    // console.log(response);

    for (let i = 0 ; i < response.data.length ; i++) {

        $('#tableBody').append(

            '<tr>' +
            '<td>' + response.data[i].prenomPeople + '</td>' +
            '<td>' + response.data[i].nomPeople + '</td>' +
            '<td>' + response.data[i].emailPeople + '</td>' +
            '<td>' + response.data[i].isRecruteur +'</td>' +
            '<td><a href="./adminPage.html"><button class="btn delete" value=' + response.data[i].numPeople + '>delete</button></a></td>' +
            '<td><button class="btn update" value=' + response.data[i].numPeople + '>update</button></td>' +
        '</tr>'
        );
    }

    $('.delete').on('click', (e) => {
        let numPeople = e.target.value;
        axios.post('http://localhost:3000/adminDelete', { numPeople: numPeople });
    });

    $('.update').on('click', (e) => {
        let numPeople = e.target.value;
        axios.post('http://localhost:3000/adminUpdate', { numPeople: numPeople }).then((response => {

            $('.container')[0].innerHTML = 
            '<div class="card">' +
                '<div class="card-content">' +
                    '<form method="post" class="container">' +

                        '<div>' +
                            '<label for="first_name_id">First name</label>' +
                            '<input id="first_name_id" type="text" value="'+ response.data[0].prenomPeople +'" required>' +
                        '</div>' +


                        '<div>' +
                            '<label for="last_name_id">Last name</label>' +
                            '<input id="last_name_id" type="text" value="'+ response.data[0].nomPeople +'" required>' +
                        '</div>' +

                        '<div>' +
                            '<label for="email_id">Email</label>' +
                            '<input id="email_id" type="email" value="'+ response.data[0].emailPeople +'" required>' +
                        '</div>' +

                        '<div class="center">' +
                            '<button id="submit" class="btn" type="submit">Update</button>' +
                        '</div>' +
                    '</form>' +
                '</div>' +
            '</div>';

            $('form').on('submit', () => {
                axios.post('http://localhost:3000/adminUpdate', { 
                    numPeople: response.data[0].numPeople,
                    prenomPeople: $('#first_name_id').val(),
                    nomPeople: $('#last_name_id').val(),
                    emailPeople: $('#email_id').val()
                })
            });
        })).catch(err => {
            if (err) {
                throw err;
            }
        })
    });

    });


})