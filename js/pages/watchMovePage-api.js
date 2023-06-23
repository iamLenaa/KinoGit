// // data
const D = new Date();
const thisMonth = D.toLocaleString('en', { month: 'long' }); // june
const thisYear = D.getFullYear() // 2023

document.getElementById('FullYear').innerText = thisYear

// // ___________________________________________________________________________________________________________________________
// themoviedb
async function getMoviesPopular() {
    const key_api = '7f40b6625aea0472e58da6d7ddc12fad'
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key_api}&append_to_response=videos/1399`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const res = await response.json();
        return res

    } catch (error) {
        console.error(error);
    }
}
// slider 1 top 20

getMoviesPopular().then(r => {
    let films = r.results
    const swiper_wrapper = document.getElementById('head-swiper-wrapper')
    console.log(films);
	films.forEach(el => {
		const div = document.createElement('div')
		div.className = 'swiper-slide head-swiper-slide'
		div.style = `background-image:url(https://image.tmdb.org/t/p/w500/${el.poster_path})`
		div.innerHTML = `
					<div class="head-swiper-wrapper-play-img-cont">
						<img src="./assets/svg/play-button.svg" alt="play-button">
					</div>

					<span class="head-slide-reyting">${el.vote_average}</span>
					
					<div class="head-info">
						<h4 class="head-info-title">${el.title}</h4>
					</div>`
		swiper_wrapper.appendChild(div)
	})
    headSwiper()
});