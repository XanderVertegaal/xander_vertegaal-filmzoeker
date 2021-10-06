const movieList = document.querySelector("#movie-list")
const radioSelectors = document.querySelectorAll('[type="radio"]')
const textField = document.querySelector("#search-text")

const addMoviesToDom = function(movies){
    movieList.querySelectorAll('li').forEach(element => element.remove())
    movies.map(x => {
        let newFilm = document.createElement("li")
        newFilm.className = "movie-item"
        // Hier de titel invoeren zorgt ervoor dat de titel boven de poster staat, wat niet gewenst is.
        // newFilm.innerHTML = x.Title

        let newImage = document.createElement("img")
        newImage.className = "movie-poster"
        newImage.src = x.Poster

        let newLink = document.createElement("a")
        newLink.className = "movie-link"
        newLink.href = "https://www.imdb.com/title/" + x.imdbID
        newLink.target = "_blank"

        let newTitle = document.createElement("p")
        newTitle.className = "movie-title"
        newTitle.innerHTML = x.Title + '<br>' + x.Year

        newLink.append(newImage)
        newLink.append(newTitle)
        newFilm.append(newLink)
        movieList.append(newFilm)
    })
}

const includesTitle = function(title) {
    return movies.filter(movie => movie.Title.includes(title))
}

const filterRecent = function() {
    console.log(movies.filter(movie => parseInt(movie.Year) >= 2014))
    return movies.filter(movie => parseInt(movie.Year) >= 2014)
}

const radioFilter = function(e) {
    switch (e.target.id) {
        case 'radio-recent':
            addMoviesToDom(filterRecent(movies))
            break
        case 'radio-Avengers':
        case 'radio-X-Men':
        case 'radio-Princess':
        case 'radio-Batman':
            addMoviesToDom(includesTitle(e.target.id.slice(6,)))
            break
        default:
            console.log('Default case!')
    }
};

addMoviesToDom(filterRecent(movies))

radioSelectors.forEach(button => {
    button.addEventListener('change', radioFilter)
})

textField.addEventListener('change', () => {
    addMoviesToDom(includesTitle(textField.value))
})