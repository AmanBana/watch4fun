document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const apiKey = '4d6a821c'; // Replace with your actual OMDb API key
    const movieTitle = document.getElementById('movie-title').value;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the API response for debugging
            if (data.Response === 'True') {
                document.getElementById('movie-details').innerHTML = `
                    <h2>${data.Title}</h2>
                    <img src="${data.Poster}" alt="${data.Title} Poster">
                    <p><strong>Year:</strong> ${data.Year}</p>
                    <p><strong>Rated:</strong> ${data.Rated}</p>
                    <p><strong>Released:</strong> ${data.Released}</p>
                    <p><strong>Runtime:</strong> ${data.Runtime}</p>
                    <p><strong>Genre:</strong> ${data.Genre}</p>
                    <p><strong>Director:</strong> ${data.Director}</p>
                    <p><strong>Writer:</strong> ${data.Writer}</p>
                    <p><strong>Actors:</strong> ${data.Actors}</p>
                    <p><strong>Plot:</strong> ${data.Plot}</p>
                    <p><strong>Language:</strong> ${data.Language}</p>
                    <p><strong>Country:</strong> ${data.Country}</p>
                    <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
                    <p><strong>IMDb Votes:</strong> ${data.imdbVotes}</p>
                    <p><strong>Type:</strong> ${data.Type}</p>
                    <p><strong>Box Office:</strong> ${data.BoxOffice}</p>
                    <p><strong>Production:</strong> ${data.Production}</p>
                `;
                document.getElementById('movie-details').classList.remove('hidden');
            } else {
                document.getElementById('movie-details').innerHTML = `<p>Movie not found. Please try again.</p>`;
                document.getElementById('movie-details').classList.remove('hidden');
            }
        })
        .catch(error => {
            console.error('Error fetching movie information:', error);
            document.getElementById('movie-details').innerHTML = `<p>Error fetching movie information. Please try again later.</p>`;
            document.getElementById('movie-details').classList.remove('hidden');
        });
});
