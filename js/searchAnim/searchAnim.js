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