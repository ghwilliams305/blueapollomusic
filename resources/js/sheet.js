const song = songsObj[window.location.search.slice(window.location.search.indexOf('=') + 1, window.location.search.length)];

const pageTitle = document.getElementById('pagetitle');
const cover = document.getElementById('cover');
const audio = document.getElementById('audio');
const songTitle = document.querySelector('#head h1');
const duration = document.querySelector('#head span');
const description = document.getElementById('description');
const iframe = document.querySelector('#info2 iframe');
const more = document.getElementById('more');
const main = document.querySelector('main');

pageTitle.innerHTML = 'Blue Apollo Music | ' + song.title;
cover.src = song.image;
songTitle.innerHTML = song.title + ' (' + song.date + ')';
description.innerHTML = song.description;
iframe.src = song.score;
main.style.backgroundImage = "url('" + song.image + "')";

const source = document.createElement('source');
source.src = song.audio;
source.type = 'audio/mpeg';
audio.appendChild(source);

let times = 1;
for(let s in songsObj) {
    if(s !== song.fileKey) {
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

        more.appendChild(article);

        times++;

        if(times > 2) break;
    }
}