const searchBar = document.querySelector('#searchBar'); //search input bar
const searchButton = document.querySelector('#searchButton'); //search button near input bar
const movieContent = document.querySelector('#content'); //area to display movie images
const searchTitle = 'https://api.themoviedb.org/3/search/movie?api_key=49fcb5ec4c606313e6a91cc07270d6ee';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w200'
const API_KEY = '49fcb5ec4c606313e6a91cc07270d6ee';

searchButton.onclick = (event) => {
  event.preventDefault();
  const value = searchBar.value;
  const title = searchTitle + '&query=' + value;

  fetch(title)
    .then((res) => res.json())
    .then(renderMovies)
    .catch((error) => {
      console.log('Error: ', error);
    });

  searchBar.value = '';
}

const renderMovies = (data) => {
  movieContent.innerHTML = '';
  const movies = data.results;
  const images = displayMovieImage(movies);
  movieContent.appendChild(images);
}

const returnMoviePoster = (movies) =>{
  return movies.map((movie) => {
    return `<img src=${IMAGE_URL + movie.poster_path} data-movie-id=${movie.id}/>`;
  })
}

//createMovieContainer
const displayMovieImage = (movies) => {
  const movieElement = document.createElement('div');
  movieElement.setAttribute('id', 'movie')

  const poster = `
    <div id='movie-image'>
      ${returnMoviePoster(movies)}
    </div>
  `

  movieElement.innerHTML = poster;
  return movieElement;
}

console.log('test');