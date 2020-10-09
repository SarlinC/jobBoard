$(function() {
        
    let ck = new Cookie();

    $('#disconnect').hide();
    $('#create_ad').hide();

    $('#disconnect').on('click', () => {
        document.cookie = 'isRecruteur=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    });

    axios.get('http://localhost:3000/select').then(response => {    //selectionne et affiche les ad

        for (let i = 0; i < response.data.length; i ++) {
            $('.popout').append(
                '<li>' +
                '<div class="collapsible-header">\n' +
                ' <h5>' + response.data[i].titre + '</h5>\n' +
                '  <h6 class="obj">' + response.data[i].objet + '</h6>\n' +
                '   <p class="showmore">\n' +
                '    <a>learn more</a>\n' +
                '   </p>\n' +
                '  </div>\n' +
                ' <div class="collapsible-body"><span>' + response.data[i].contenu + '</span>' +
                '<p>' + response.data[i].date + '</p></div>\n' +
                '<button class="btn update admin_btns" value='+ response.data[i].numAdvertisements +'>Update</button><a href="./index.html"><button class="btn delete admin_btns" value='+ response.data[i].numAdvertisements +'>Delete</button></a>' +
                '</li>');
        }

        $('.admin_btns').hide();

        if (document.cookie != "") {

            $('#connect').hide();
            $('#disconnect').show();
            $('.admin_btns').show();

            if (parseInt(ck.getCookie('isRecruteur'))) {
                $('#create_ad').show();
            }
        }

        $('.delete').on('click', (e) => {
            console.log((e.target).value);
            let numAdvertisements = (e.target).value;

            axios.post('http://localhost:3000/delete', { numAdvertisements: numAdvertisements })
            .then(response => { 
            });
        });

        $('.update').on('click', (e) => {
           let numAd = e.target.value;

           axios.post('http://localhost:3000/update', {
              numAdvertisements: numAd
           }).then(response => {
               console.log(response);
           }).catch(err => {
               throw err;
           });
        });
    }).catch(err => {
        console.log(err);
    });

    $(document).ready(function(){
        $('.collapsible').collapsible();
    });
});