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
                $('.container')[0].innerHTML =
                '<div class="card">' +
                    '<div class="card-content">' +
                        '<form method="post" class="container">' +
                            '<div>' +
                                '<label for="ad_title">Title</label>' +
                                '<input id="ad_title" type="text" value="' + response.data[0].titre + '" required>' +
                            '</div>' +

                             '<div>' +
                                '<label for="ad_object">Object</label>' +
                                '<input id="ad_object" type="text" value="' + response.data[0].objet + '" required>' +
                             '</div>' +

                             '<div>' +
                                '<label>Contenu</label>' +
                                '<textarea id="ad_contenu" required>' + response.data[0].contenu + '</textarea>' +
                             '</div>' +

                             '<div class="center">' +
                                '<button id="submit" class="btn" type="submit">Update</button>' +
                             '</div>' +
                        '</form>' +
                    '</div>' +
                '</div>';

                $('form').on('submit', function() {
                    axios.post('http://localhost:3000/update', {
                        numAdvertisements: response.data[0].numAdvertisements,
                        titre: $('#ad_title').val(),
                        objet: $('#ad_object').val(),
                        contenu: $('#ad_contenu').val()
                    });
                });
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