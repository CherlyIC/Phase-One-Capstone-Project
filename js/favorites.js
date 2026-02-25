const storedFavorites = 'bookExplorerFavorites'

export function getFavorites(){
  const stored = localStorage.getItem(storedFavorites)
  return stored ? JSON.parse(stored) : []
}

function saveFavorites(favorites) {
  localStorage.setItem(storedFavorites, JSON.stringify(favorites))

}

export function addFavorite(book){
  const favorites = getFavorites()
  const alreadyExists = favorites.some(fav => fav.id === book.id)
  if(!alreadyExists) {
    favorites.push(book)
    saveFavorites(favorites)
    console.log('Added to favorites:', book.title)
  } else{
    console.log('Book already in favorites:', book.title)
  }
}

export function removeFavorite(bookId) {
  const favorites = getFavorites()
  const updatedFavorites = favorites.filter(fav => fav.id !== bookId)
  saveFavorites(updatedFavorites)
  console.log('Removed book with ID:', bookId)
}

export function isFavorite(bookId) {
  const favorites = getFavorites()
  return favorites.some(fav => fav.id === bookId)
}

export function renderFavorites() {
  const grid = document.getElementById('favoritesGrid')
  const emptyMessage = document.getElementById('emptyMessage')

  if(!grid || !emptyMessage) return
  const favorites = getFavorites()

  if(favorites.length === 0){
     emptyMessage.innerHTML = `
      <p class="text-6xl mb-4">📭</p>
      <p class="text-2xl font-bold text-yellow-400 mb-2">No favorites yet!</p>
      <p class="text-purple-300 text-lg mb-6">
        Go back and add some books you love.
      </p>
      <a href="index.html"
         class="bg-yellow-400 text-purple-950 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition duration-300">
        Browse Books
      </a>
    `


    emptyMessage.classList.remove('hidden')
    grid.classList.add('hidden')
    return
  }

  emptyMessage.classList.add('hidden')
  grid.classList.remove('hidden')

  grid.innerHTML = favorites.map(book => `
    <div class="bg-purple-950 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 flex flex-col">

      <img
        src="${book.cover}"
        alt="${book.title}"
        class="w-full h-56 object-cover"
      />

      <div class="p-4 flex flex-col flex-1">

        <h4 class="text-lg font-bold text-white mb-1">${book.title}</h4>
        <p class="text-purple-300 text-sm mb-3">${book.author}</p>

        <span class="inline-block bg-yellow-400 text-purple-950 text-xs font-bold px-3 py-1 rounded-full mb-4">
          ${book.genre}
        </span>
        <button
          data-id="${book.id}"
          class="removeBtn mt-auto w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-400 transition duration-300 font-semibold">
          ❌ Remove
        </button>

      </div>
    </div>
  `).join('')

  attachRemoveListeners()
}

function attachRemoveListeners() {
  const buttons = document.querySelectorAll('.removeBtn')

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const bookId = button.getAttribute('data-id')
      removeFavorite(bookId)
      renderFavorites()
    })
  })
}
renderFavorites()
