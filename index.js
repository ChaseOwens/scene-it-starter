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
    var form = document.getElementById('search-form')
    form.addEventListener('submit', function(e){
        e.preventDefault();
        moviesContainer.innerHTML = MovieRender(movieData);
    });});

    function savetoWatchlist(imdbID){
        var movie = movieData.find(function(currentMovie){
        return currentMovie.imdbID == imdbID;
        });
        var watchlistJSON = localStorage.getItem('watchlist');
        var watchlist = JSON.parse(watchlistJSON)
            if(watchlist = null){
                watchlist = Array();
                watchlist.push(movie);
                watchlistJSON = JSON.stringify(watchlist);
                localStorage.setItem('watchlist', watchlistJSON);
            }
        }