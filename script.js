"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:  {},
    genres: [],
    privat: false
};

const lastMovieFirst = prompt('Один из последних просмотренных фильмов?', ''),
      estimationMovieFirst = prompt('Во сколько его оцените?', ''),
      lastMovieSecond = prompt('Один из последних просмотренных фильмов?', ''),
      estimationMovieSecond = prompt('Во сколько его оцените?', '');

// console.log(lastMovieFirst);

personalMovieDB.movies[lastMovieFirst] = estimationMovieFirst;
personalMovieDB.movies[lastMovieSecond] = estimationMovieSecond;

// personalMovieDB.movies = {
//     lastMovieFirst: estimationMovieFirst,
//     lastMovieSecond: estimationMovieSecond
// };

console.log(personalMovieDB);