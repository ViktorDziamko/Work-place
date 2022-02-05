"use strict"

const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personaMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Сколько фильмов вы уже посмотрели?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Сколько фильмов вы уже посмотрели?',''),
      d = prompt('На сколько оцените его?','');

personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);