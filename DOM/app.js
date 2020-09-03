const addMovieModalEl = document.getElementById('add-modal')
// const startAddMovieButton = document.querySelector('header').lastElementChild
const startAddMovieButton = document.querySelector('header button')
const backdropEl = document.getElementById('backdrop')
const cancelModalEl = addMovieModalEl.querySelector('.btn--passive')
const confirmAddMovieButton = cancelModalEl.nextElementSibling
const userInputEls = addMovieModalEl.querySelectorAll('input')
const entryText = document.getElementById('entry-text')

const movies = []

const updateUI = () => {
  if(movies.length === 0 ){
    entryText.style.display = 'block'
  }else {
    entryText.style.display = 'none'
  }
}

const renderMovieList = (title, imageUrl, rating) => {
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
  const movieListEl = document.getElementById('movie-list')
  movieListEl.append(newMovieElement)

}

const toggleBackdrop = () => {
  backdropEl.classList.toggle('visible')
}

const toggleMovieModal = () => {
  addMovieModalEl.classList.toggle('visible')
  toggleBackdrop()

}

const cancelMovieInputs = () => {
  userInputEls.forEach((input) => {
    input.value = ''
  })
}

const backdropClickHandler = () => {
  toggleMovieModal()
  cancelMovieInputs()
}

const cancelClickHandler = () => {
  toggleMovieModal()
  cancelMovieInputs()
}

const addMovieHandler = () => { 
  const title = userInputEls[0].value
  const imageUrl = userInputEls[1].value
  const rating = userInputEls[2].value

  if(title.trim() === '' || imageUrl === '' || rating === '' || +rating > 5 > 1) {
    alert('Please enter valid values (rating between 1 and 5)')
  }

  const newMovie = {
    title,
    imageUrl,
    rating
  }
  movies.push(newMovie)
  console.log(movies)
  toggleMovieModal()
  cancelMovieInputs()
  updateUI()
  renderMovieList(title, imageUrl, rating)
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
backdropEl.addEventListener('click', backdropClickHandler)
cancelModalEl.addEventListener('click', cancelClickHandler)
confirmAddMovieButton.addEventListener('click', addMovieHandler)