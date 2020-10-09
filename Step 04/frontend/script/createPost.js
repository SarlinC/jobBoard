$(function () {

    let ck = new Cookie();

    $('#ad_form').on('submit', function() {

        let ad_title = $('#ad_title').val();
        let ad_object = $('#ad_object').val();
        let ad_contenu = $('#ad_contenu').val();
        let ad_numPeople = parseInt(ck.getCookie('numPeople'));
        let ad_date = Date(Date.now()).slice(0, 25);



        axios.post('http://localhost:3000/createPost', {
            ad_title: ad_title,
            ad_object: ad_object,
            ad_contenu: ad_contenu,
            ad_numPeople : ad_numPeople,
            ad_date: ad_date
        }).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.log(err);
        });
        return false;
    });
});


