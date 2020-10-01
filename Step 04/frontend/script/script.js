(function() {
    const axios = require('axios');

    axios.get('http://localhost:3000/').then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    });

    /*fetch('../backend/app.js', {
        method: 'GET'
    }).then((response) => {
        console.log(response);
    });*/
});

        /*
            <li>
                <div class="collapsible-header">
                    <h5>Job name 1</h5>
                    <h6 class="obj">My description in 2 words</h6>
                    <p class="showmore">
                        <a>learn more</a>
                    </p>
                </div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
        */