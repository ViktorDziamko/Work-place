"use strict";

let number0fFilms;

function start () {
    number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
        number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
start ();

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};


function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотреных фильмов?',''),
              b = prompt('На сколько оцените его?','');
    
        if(a != null && b != null && a != '' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
    }
}
rememberMyFilms();


function detectPersonalMovie () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы хороший зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошыбка');
    }
}
detectPersonalMovie ();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.geners[i - 1] = genre;
    }
}
writeYourGenres();