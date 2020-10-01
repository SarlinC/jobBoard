(function() {
    const axios = require('axios');

    const postBreed = () => {
        try {
            return axios.post('../backend/', {
                titre: 'titre',
                objet: '',
                contenu: '',
                date: '',
                numCompanies: '',
                numCandidat: '',
                numRecruteur: ''
            });
        }
        catch (e) {
            console.log(e);
        }
    }

    const countBreeds = async () => {
        postBreed().then(response => {
            if (response.data.message) {
                console.log(`Got ${Object.entries(response.data.message).length} breeds.`)
            }
        }).catch(e => {
            console.log(e);
        });
    }

    countBreeds();
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