$(function() {
        
    let ck = new Cookie();

    $('#disconnect').hide();
    $('#create_ad').hide();
    
    if (document.cookie != "") {
        
        $('#connect').hide();
        $('#disconnect').show();

        if (parseInt(ck.getCookie('isRecruteur'))) {
            $('#create_ad').show();
        }
    }

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
                '<button class="btn admin_btns" value='+ response.data[i].numAdvertisements +'>Update</button><button class="btn admin_btns" value='+ response.data[i].numAdvertisements +'>Delete</button>' +
                '</li>');
        }
        $('.admin_btns').on('click', (e) => {
            console.log((e.target).value);
            // let numAdvertisements = e.val();

            axios.post('http://localhost:3000/delete', { numAdvertisements: numAdvertisements })
            .then(response => { 
                window.location.href = "./index.html";
            });
        });
    }).catch(err => {
        console.log(err);
    });



    




    $(document).ready(function(){
        $('.collapsible').collapsible();
    });
    

});