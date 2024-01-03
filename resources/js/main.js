const topSongs = document.getElementById('top');
const newSongs = document.getElementById('new');
const newImg = document.getElementById('newimg');
const topImg = document.getElementById('topimg');

let isfirst = true

for(let x in songsObj) {
    if(isfirst) {
        topImg.src = songsObj[x].image;
        topImg.addEventListener('click', () => {
            document.location = './sheet.html?s=' + songsObj[x].fileKey;
        });
        isfirst = false;
    }
    const element = document.createElement('a');
    const element2 = document.createElement('li');
    element.href = './sheet.html?s=' + songsObj[x].fileKey;
    element.innerHTML = songsObj[x].title;
    element2.appendChild(element);
    topSongs.appendChild(element2);
}

isfirst = true

for(let x in songsObj) {
    if(isfirst) {
        topImg.addEventListener('click', () => {
            document.location = './sheet.html?s=' + songsObj[x].fileKey;
        });
        newImg.src = songsObj[x].image;
        isfirst = false;
    }
    const element = document.createElement('a');
    const element2 = document.createElement('li');
    element.href = './sheet.html?s=' + songsObj[x].fileKey;
    element.innerHTML = songsObj[x].title;
    element2.appendChild(element);
    newSongs.appendChild(element2);
}