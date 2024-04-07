const songBanks = {
    home: {
        key: 'home',
        title: 'Home',
        type: 'orchestra',
        date: new Date('2024-01-14'),
        description: "Experience the musical journey of 'Home,' a composition that seamlessly transitions from a serene legato section with a captivating violin riff to an energetic pizzicato segment featuring Violas, 2nd Violins, and basses. As 1st Violins soar above the rhythmic pizzicato, a dark and legato melody unfolds, accompanied by the brooding undertones of the Cellos. The culmination sees Violins and Violas uniting to form the central melody, echoed by the Cello and Bass sections. Reflecting the post-COVID era and the rise of the work-from-home lifestyle, 'Home' captures the transformation of our homes from tranquil sanctuaries to bustling offices.",

        get audio() {
            return `${this.key}/${this.key}.mp3`;
        },

        get score() {
            return `${this.key}/${this.key}.pdf`;
        },

        get image() {
            return `${this.key}/${this.key}.jpg`;
        }
    },
    
    endings: {
        key: 'endings',
        title: 'Endings',
        type: 'chamber',
        date: new Date('2023-12-31'),
        description: "Completing my college semester marked the end of a chapter. The experience became profoundly valuable. Crafting classical music scores and original compositions with musescore 4 sounds added an extra layer of significance, making it an unforgettable journey. 'Endings' mirrors this sentiment, commencing with a melancholic reflection on the semester's end, accompanied by a longing to relive those moments. The song gracefully transitions, echoing acceptance and understanding that all things must conclude to pave the way for new beginnings. Wishing you a joyous New Year and expressing gratitude for your time. Enjoy :)",

        get audio() {
            return `${this.key}/${this.key}.mp3`;
        },

        get score() {
            return `${this.key}/${this.key}.pdf`;
        },

        get image() {
            return `${this.key}/${this.key}.jpg`;
        }
    },

    anticipation: {
        key: 'anticipation',
        title: 'Anticipation',
        type: 'wind',
        date: new Date('2023-12-17'),
        description: "Harmonizing woodwind instruments, brass instruments, and Musescore 4 percussion, Anticipation is a fiercely tense song featuring flute, piccolo, alto flute, horn, trombone, tuba, toms, bass drum, snare, cymbals, xylophone. The rhythmic and repetitive winds and percussion, underscored by the booming brass, create an atmospheric suspense. This original composition, a testament to Musescore 4's capabilities, merges tradition and innovation. The finale, marked by a potent horn and trombone line, mirrors the emotional turbulence leading to a grand revelation. Experience the orchestral magic, where classical music scores meet the cutting-edge sounds and playback of Musescore 4.",

        get audio() {
            return `${this.key}/${this.key}.mp3`;
        },

        get score() {
            return `${this.key}/${this.key}.pdf`;
        },

        get image() {
            return `${this.key}/${this.key}.jpg`;
        }
    },

    skyOfWaves: {
        key: 'the_sky_of_waves',
        title: 'The Sky of Waves',
        type: 'chamber',
        date: new Date('2023-12-03'),
        description: "In the enchanting painting 'Starry Night' by Vincent Van Gogh, the night sky above a German village mesmerizes with its vibrant stars and moonlit elegance. Musescore 4's enchanting soundscape, coupled with alto and tenor sax sheet music, weaves a melody that mirrors the beauty of the night sky. Appreciate the celestial magic with the warm tones of saxophones and the visual feast of a night sky painting. Let's celebrate this timeless connection between art and music, urging us to pause, appreciate, and be in awe of the wonders above.",

        get audio() {
            return `${this.key}/${this.key}.mp3`;
        },

        get score() {
            return `${this.key}/${this.key}.pdf`;
        },

        get image() {
            return `${this.key}/${this.key}.jpg`;
        }
    },
}

console.log(songBanks.anticipation.key);
console.log(songBanks.home.score);
console.log(songBanks.endings.date.getFullYear());

export function getTopSongs(limit) {
    const resultArray = [];
    if(!limit) {
        limit = 0;

        for(let x in songBanks) {
            console.log(x);
            limit++;
        }
    }

    let x = 0;
    for(let y in songBanks) {
        if(x < limit) {
            resultArray.push(songBanks[y].key);
        } else {
            break;
        }

        x++;
    }

    return resultArray;
}

export function getNewSongs(limit) {
    const newSongs = [];
    if(!limit) {
        limit = 0;

        for(let x in songBanks) {
            console.log(x);
            limit++;
        }
    }

    for(let x = 0; x < limit; x++) {
        let dateToBeat = 0;
        let newest;

        for(let y in songBanks) {
            if(!newSongs.includes(songBanks[y].key)) {
                if(songBanks[y].date.getTime() > dateToBeat) {
                    newest = songBanks[y].key;
                    dateToBeat = songBanks[y].date.getTime();
                }
            }
        }

        if(newest) {
            newSongs.push(newest);
        }
    }

    return newSongs;
}

export function getSongGroup(group, limit) {
    const resultArray = [];

    if(!limit) {
        limit = 0;

        for(let x in songBanks) {
            console.log(x);
            limit++;
        }
    }

    let x = 0;
    for(let y in songBanks) {
        if(x < limit) {
            if(songBanks[y].type === group) {
                resultArray.push(songBanks[y].key);
                x++;
            }
        } else {
            break;
        }
    }

    return resultArray;
}

export function getReleventSong(listOfKeywords, limit) {
    const resultArray = [];

    if(!limit) {
        limit = 0;

        for(let x in songBanks) {
            console.log(x);
            limit++;
        }
    }

    let x = 0;
    for(let y in songBanks) {
        let isContained = false;

        if(x < limit) {
            for(let z in songBanks[y]) {
                let searchedArray;
                if(typeof songBanks[y][z] === 'string') {
                    let lowerCase = songBanks[y][z].toLowerCase();
                    searchedArray = lowerCase.split(" ");
                } else {
                    searchedArray = [songBanks[y][z]];
                }

                for(let w of listOfKeywords) {
                    if(searchedArray.includes(w.toLowerCase())) {
                        isContained = true;
                        break;
                    }
                }

                if(isContained) {
                    break;
                }
            }

            if(isContained) {
                resultArray.push(songBanks[y].key);
                x++;
            }
        } else {
            break;
        }
    }

    return resultArray;
}

export function getSongObjByKey(key) {
    for(let x in songBanks) {
        if(key === songBanks[x].key) {
            return songBanks[x];
        }
    }
}

export async function getFullSongObjByKey(songKey) {
    const tempObj = getSongObjByKey(songKey);
    const mediaFiles = await Promise.all([
        import(`../../content/${tempObj.image}`),
        import(`../../content/${tempObj.audio}`),
        import(`../../content/${tempObj.score}`)
    ]);

    return {
        ...tempObj,
        image: mediaFiles[0],
        audio: mediaFiles[1],
        score: mediaFiles[2]
    }
}

console.log(getTopSongs(1));
console.log(getNewSongs(5));
console.log(getSongGroup('chamber', 1));
console.log(getReleventSong(['Endings']));
console.log(getSongObjByKey('endings').title);