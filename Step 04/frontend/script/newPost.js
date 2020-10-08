const { default: Axios } = require("axios");

$(function () {

    $('#ad_form').on('submit', function() {

        let ad_title = $('#ad_title').val();
        let ad_object = $('#ad_object').val();
        let ad_contenu = $('#ad_contenu').val();
        let now_date = Date(Date.now()).slice(0, 25);

        axios.post('http://localhost:3000/newPost', {
            ad_title: ad_title,
            ad_object: ad_object,
            ad_contenu: ad_contenu,
            now_date: now_date
        }).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.log(err);
        });
        return false;
    });
});


