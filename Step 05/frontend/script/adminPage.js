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
            '<td><a href="./adminPage.html"><button class="btn update" value=' + response.data[i].numPeople + '>update</button></a></td>' +
        '</tr>'
        );
    }

    $('.delete').on('click', (e) => {
        let numPeople = e.target.value;
        console.log('TRIGGED');
        axios.post('http://localhost:3000/adminDelete', { numPeople: numPeople });
    });

    });


})