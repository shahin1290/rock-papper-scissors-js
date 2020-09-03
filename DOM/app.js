const addMovieModalEl = document.getElementById('add-modal')
// const startAddMovieButton = document.querySelector('header').lastElementChild
const backdropEl = document.getElementById('backdrop')
const cancelModalEl = document.querySelector('.modal__actions').firstElementChild
const startAddMovieButton = document.querySelector('header button')

console.log(cancelModalEl)

const toggleBackdrop = () => {
  backdropEl.classList.toggle('visible')
}

const toggleMovieModal = () => {
  addMovieModalEl.classList.toggle('visible')
  toggleBackdrop()

}


const backdropClickHandler = () => {
  toggleMovieModal()
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
backdropEl.addEventListener('click', backdropClickHandler)
cancelModalEl.addEventListener('click', backdropClickHandler)