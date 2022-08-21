const BASE_URL = "https://api.themoviedb.org/3/"
const API = "?api_key=f6221fd58ecb727dea123ff8ebd410dd&language=tr"


function fetchMovies() {
    fetch(BASE_URL + "trending/movie/week" + API)
        .then(resp => resp.json())
        .then(renderMovies)
}

const moviesList = document.querySelector(".movies")
const baseImageUrl = "https://image.tmdb.org/t/p/original"

function renderMovies(movies) {
    moviesList.innerHTML = ""
    console.log(movies.results)
    movies.results.forEach(function (movie) {

        let posterUrl = baseImageUrl + movie.poster_path;
     
        moviesList.innerHTML += `
        <div class="movie">
            <div class="movie_banner"><img src="${posterUrl}" alt="" ></div>
            <div class="movie_info">
                <div class="movie_name">${movie.title}</div>
                <div class="movie_rating"><img src="img/Star.png" alt=""> <span> ${(movie.vote_average).toFixed(1)}/10 IMDb</span> </div>
            <div class="movie_genre"><span>action </span><span>adventure </span><span>drama </span></div>
            <div class="movie_duration"><img src="img/clock.png" alt=""><span>1h 48m</span></div>
        </div>
    </div>
        `
        
    })
}


async function fetchGenrees() {
    const response = await fetch(BASE_URL + "genre/movie/list" + API);
    const movies = await response.json();
    return getCategories(movies);
}

let getCategories = (categories) => {
    console.log(categories.genres)
}

fetchMovies();