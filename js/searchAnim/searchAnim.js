let search = document.getElementById('search')
let search_inp = document.getElementById('search-inp')
let search_close = document.getElementById('search-close')

search_close.addEventListener('click', () => {
    search.classList.toggle('search-anime-inp')
    search_close.classList.toggle('search-anime-close')
    search_inp.value = ''

    search.offsetWidth < 50 ? search_inp.focus() : false;
})

window.addEventListener('scroll', () => {
    search.classList.remove('search-anime-inp')
    search_close.classList.remove('search-anime-close')
    search_inp.value = ''
    search.offsetWidth < 50 ? false : search_inp.blur();
})


const key_api = '7f40b6625aea0472e58da6d7ddc12fad'

const getSearchedMovie = async (searchVal) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchVal}&api_key=${key_api}`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const res = await response.json();
        return res

    } catch (error) {
        console.error(error);
    }
}

search_inp.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();

        getSearchedMovie(event.target.value).then(searchRes => {
            document.querySelector("main").innerHTML = "";

            const searchResContainer = document.createElement('div');

            searchRes.results.map(moiveItem => {
                const movieItemContainer = document.createElement('div');
                const imagesBasePath = "https://www.themoviedb.org/t/p/w94_and_h141_bestv2";
                let movieImgPath = moiveItem.poster_path ? imagesBasePath + moiveItem.poster_path : "./assets/no_img.svg"

                movieItemContainer.innerHTML = `<div class="search-item movie-description">
                <div class="movie-description-left-cont">
                    <div class="movie-description-left-img-cont">
                        <img src="${movieImgPath}" alt="film-img">
                    </div>
                </div>

                <div class="movie-description-right-cont">

                    <h1 class="movie-description-right-title">${moiveItem.title}</h1>

                    <div class="movie-description-right-release-date">
                        <span>год</span>
                        <span>${moiveItem.release_date}</span>
                    </div>

                    <div class="movie-description-right-overview">
                        <p>Про фильм</p>
                       ${moiveItem.overview}
                    </div>

                </div>
            </div>`
                searchResContainer.appendChild(movieItemContainer)
            })

            document.querySelector("main").appendChild(searchResContainer)
        });
    }
});

