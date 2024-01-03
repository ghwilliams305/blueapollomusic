const bands = document.getElementById('bands');
const wind = document.getElementById('wind');
const orchestra = document.getElementById('orchestra');
const chamber = document.getElementById('chamber');

for(let e of ['bands', 'wind', 'orchestra', 'chamber']) {
    let isSongs = false;

    for(let s in songsObj) {
        if(songsObj[s].type === e) {
            const textOne = document.createElement('h2');
            const textTwo = document.createElement('p');
            const img = document.createElement('img');
            const article = document.createElement('article');
            const info = document.createElement('div');

            textOne.innerHTML = songsObj[s].title;
            textTwo.innerHTML = songsObj[s].description.slice(0, 100) + '...';
            img.src = songsObj[s].image;
            img.alt = 'song cover for' + songsObj[s].title;

            info.id = 'info';
            
            article.addEventListener('click', () => {document.location = './sheet.html?s=' + songsObj[s].fileKey;});

            info.appendChild(textOne);
            info.appendChild(textTwo);
            
            article.appendChild(img);
            article.appendChild(info);
            switch(e) {
                case 'bands':
                    bands.appendChild(article);
                    break;
                case 'wind':
                    wind.appendChild(article);
                    break;
                case 'orchestra':
                    orchestra.appendChild(article);
                    break;
                case 'chamber':
                    chamber.appendChild(article);
                    break;
            }

            isSongs = true;
        }
    }

    if(!isSongs) {
        const p = document.createElement('p');

        p.innerHTML = 'Nothing Here Yet!';

        switch(e) {
            case 'bands':
                bands.appendChild(p);
                break;
            case 'wind':
                wind.appendChild(p);
                break;
            case 'orchestra':
                orchestra.appendChild(p);
                break;
            case 'chamber':
                chamber.appendChild(p);
                break;
        }
    }
}