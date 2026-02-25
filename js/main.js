import { searchBooks } from './fetch.js'
import { addFavorite, removeFavorite, isFavorite } from './favorites.js'

const booksGrid = document.getElementById('booksGrid')
const loadingSpinner = document.getElementById('loadingSpinner')
const emptyMessage = document.getElementById('emptyMessage')

function createBookCard(book) {
  const alreadyFavorite = isFavorite(book.id)
  const btnText = alreadyFavorite ? 'added!' : 'Add to Favorites'

  const btnClass = alreadyFavorite ? 'bg-purple-600 text-white' : 'bg-yellow-400 text-purple-950'

  return `
    <div class="bg-purple-950 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 flex flex-col">

      <img
        src="${book.cover}"
        alt="${book.title}"
        class="w-full h-56 object-cover"
      />

      <div class="p-4 flex flex-col flex-1">

        <h4 class="text-lg font-bold text-white mb-1 line-clamp-2">${book.title}</h4>

        <p class="text-purple-300 text-sm mb-3">${book.author}</p>

        <span class="inline-block bg-yellow-400 text-purple-950 text-xs font-bold px-3 py-1 rounded-full mb-4 line-clamp-1">
          ${book.genre}
        </span>

        <button
          data-id="${book.id}"
          data-title="${book.title}"
          data-author="${book.author}"
          data-genre="${book.genre}"
          data-cover="${book.cover}"
          class="mt-auto w-full ${btnClass} py-2 rounded-lg hover:opacity-80 transition duration-300 font-semibold favoriteBtn">
          ${btnText}
        </button>

      </div>
    </div>
  `


}

function renderBooks(books) {
  loadingSpinner.classList.add('hidden')
  if(books.length === 0) {
    emptyMessage.classList.remove('hidden')
    booksGrid.classList.add('hidden')
    return
  }
  emptyMessage.classList.add('hidden')
  booksGrid.classList.remove('hidden')
  booksGrid.innerHTML = books.map(createBookCard).join('')

  attachFavoriteListeners()


}


function attachFavoriteListeners() {

  const buttons = document.querySelectorAll('.favoriteBtn')

  buttons.forEach(button => {

    button.addEventListener('click', () => {

      const book = {
        id: button.getAttribute('data-id'),
        title: button.getAttribute('data-title'),
        author: button.getAttribute('data-author'),
        genre: button.getAttribute('data-genre'),
        cover: button.getAttribute('data-cover')
      }

      if (isFavorite(book.id)) {
        removeFavorite(book.id)
        button.textContent = 'Add to Favorites'
        button.classList.remove('bg-purple-600', 'text-white')
        button.classList.add('bg-yellow-400', 'text-purple-950')
      } else {
        addFavorite(book)
        button.textContent = 'Added!'
        button.classList.remove('bg-yellow-400', 'text-purple-950')
        button.classList.add('bg-purple-600', 'text-white')
      }

    })

  })

}

async function loadDefaultBooks() {
  const books = await searchBooks('popular fiction')
  renderBooks(books)
}

loadDefaultBooks()