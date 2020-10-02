$(function() {
    axios.get('http://localhost:3000/').then(response => {
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
                '</li>');
        }
    }).catch(err => {
        console.log(err);
    });

    $(document).ready(function(){
        $('.collapsible').collapsible();
    });
});