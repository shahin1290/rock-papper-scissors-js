const addMovieModalEl = document.getElementById('add-modal')
// const startAddMovieButton = document.querySelector('header').lastElementChild
const startAddMovieButton = document.querySelector('header button')
const backdropEl = document.getElementById('backdrop')
const cancelModalEl = addMovieModalEl.querySelector('.btn--passive')
const confirmAddMovieButton = cancelModalEl.nextElementSibling
const userInputEls = addMovieModalEl.querySelectorAll('input')
const entryText = document.getElementById('entry-text')
const movieListEl = document.getElementById('movie-list')
const deleteMovieModal = document.getElementById('delete-modal')

const movies = []

const toggleBackdrop = () => {
  backdropEl.classList.toggle('visible')
}

const closeMovieModal = () => {
  addMovieModalEl.classList.remove('visible')
}

const showMovieModal = () => {
  addMovieModalEl.classList.add('visible')
  toggleBackdrop()
}

const updateUI = () => {
  if (movies.length === 0) {
    entryText.style.display = 'block'
  } else {
    entryText.style.display = 'none'
  }
}

const deleteMovie = (id) => {
  const movieIndex = movies.findIndex((el) => el.id === id)
  movies.splice(movieIndex, 1)
  movieListEl.children[movieIndex].remove()
  //toggleBackdrop()
  closeMovieDeletionModal()
}

const deleteMovieHandler = (id) => {
  deleteMovieModal.classList.add('visible')
  toggleBackdrop()
  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive')
  let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger')


  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true))
  
  confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger')


  cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal)

  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal)


  confirmDeletionButton.addEventListener('click', deleteMovie.bind(null, id))
  
}

const closeMovieDeletionModal = () => {
  toggleBackdrop()
  deleteMovieModal.classList.remove('visible')
}

const renderMovieList = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li')
  newMovieElement.className = 'movie-element'
  newMovieElement.innerHTML = `
    <div className="movie-element_image">
      <img src="${imageUrl}" alt="${title}">
    </div>

    <div className="movie-element_info">
      <h2>${title}</h2>
      <h2>${rating}/5 stars</h2>
    </div>
  `
  movieListEl.append(newMovieElement)

  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
}

const cancelMovieInputs = () => {
  userInputEls.forEach((input) => {
    input.value = ''
  })
}

const backdropClickHandler = () => {
  closeMovieModal()
  cancelMovieInputs()
  //toggleBackdrop()
  closeMovieDeletionModal()
}

const cancelClickHandler = () => {
  closeMovieModal()
  cancelMovieInputs()
  toggleBackdrop()
}

const addMovieHandler = () => {
  const id = Math.random().toString()
  const title = userInputEls[0].value
  const imageUrl = userInputEls[1].value
  const rating = userInputEls[2].value

  if (
    title.trim() === '' ||
    imageUrl === '' ||
    rating === '' ||
    +rating > 5 > 1
  ) {
    alert('Please enter valid values (rating between 1 and 5)')
  }

  const newMovie = {
    id,
    title,
    imageUrl,
    rating,
  }

  movies.push(newMovie)
  closeMovieModal()
  toggleBackdrop()
  cancelMovieInputs()
  renderMovieList(id, title, imageUrl, rating)
  updateUI()
}

startAddMovieButton.addEventListener('click', showMovieModal)
backdropEl.addEventListener('click', backdropClickHandler)
cancelModalEl.addEventListener('click', cancelClickHandler)
confirmAddMovieButton.addEventListener('click', addMovieHandler)
