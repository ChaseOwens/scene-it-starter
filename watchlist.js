document.addEventListener('DOMContentLoaded', function(){
    function MovieRender(movieArray){
        var movieHtml = movieArray.map(function(currentMovie){
            return `
            <div class='card col-4'>
                <div class = 'card-body1'>
                <img src="${currentMovie.Poster}" alt = "Card image cap">
                    <h5 class = 'card-title'>${currentMovie.Title}</h5>
                    <p class = 'card-text'>${currentMovie.Year}</p>
                    <a href ='#' class = 'btn btn-primary' onclick = 'savetoWatchlist("${currentMovie.imdbID}")'>Add Movie</a>
                </div>
            </div>
            `;
        }).join('');
        console.log(movieHtml);
        return movieHtml;
    }
    var moviesContainer = document.getElementById('movies-container');
    var moviePush = localStorage.getItem('watchlist');
    moviesContainer.innerHTML = MovieRender(moviePush);
    });