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
	high_rated_slider()
});

// //___________________________________________________________________________________________________________________________
function main_films(min_rating = 8, max_rating = 100, min_year = thisYear - 5, max_year = thisYear, page = 1) {

	return fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=FILM&ratingFrom=${min_rating}&ratingTo=${max_rating}&yearFrom=${min_year}&yearTo=${max_year}&page=${page}`, {
		method: 'GET',
		headers: {
			'X-API-KEY': 'addf2e7e-78cc-4d22-86aa-b0252044c917',
			'Content-Type': 'application/json',
		},
	})
		.then(r => r.json())
}
//slider 2 High rated films
main_films().then((r) => {
	let films = r.items
	console.log(films)
	const slider_2_wrapper = document.getElementById('high-rated-films')

	films.forEach(film => {
		// console.log(film);

		const div = document.createElement('div')
		div.className = 'swiper-slide sections-sliders'
		div.innerHTML = `
		<div class="sections-sliders-BG-img" style="background-image:url(${film.posterUrlPreview})">
			<img class="sections-sliders-watch-now-button" src="./assets/svg/play-button.svg" alt="play-btn">
		</div>

		<span class="sections-sliders-reyting">${film.ratingKinopoisk}</span>
		
		<div class="sections-sliders-info">
			<h4 class="sections-sliders-info-title">${film.nameRu}</h4>
			<span class="sections-sliders-info-data">2023</span>
		</div>`

		slider_2_wrapper.appendChild(div)
	})
})

main_films(8, 100, 2000, 2023, 2).then((r) => {
	let films = r.items
	console.log(films)
	const slider_2_wrapper = document.getElementById('high-rated-films')

	films.forEach(film => {
		// console.log(film);

		const div = document.createElement('div')
		div.className = 'swiper-slide sections-sliders'
		div.innerHTML = `
		<div class="sections-sliders-BG-img" style="background-image:url(${film.posterUrlPreview})">
			<img class="sections-sliders-watch-now-button" src="./assets/svg/play-button.svg" alt="play-btn">
		</div>

		<span class="sections-sliders-reyting">${film.ratingKinopoisk}</span>
		
		<div class="sections-sliders-info">
			<h4 class="sections-sliders-info-title">${film.nameRu}</h4>
			<span class="sections-sliders-info-data">2023</span>
		</div>`

		slider_2_wrapper.appendChild(div)
	})
})

// // ___________________________________________________________________________________________________________________________

// //slider 2 High rated films
// main_films().then((r) => {
// 	let films = r.items
// 	const slider_2_wrapper = document.getElementById('main_films_wrap2')

// 	films.forEach(film => {
// 		const div = document.createElement('div')
// 		div.className = 'swiper-slide'

// 		div.style.cssText = `background-image:url(${film.posterUrlPreview})`
// 		div.innerHTML = `
// 			<span class="">${film.ratingKinopoisk}</span>
// 			<div class="">
// 				<h4 class="">${film.nameRu}</h4>
// 			</div>`
		
// 		slider_2_wrapper.appendChild(div)
// 	})
// 	main_films_sliderConf()
// })
