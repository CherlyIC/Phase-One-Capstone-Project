//console.log("Book Explorer app Loaded");
import { addFavorite, removeFavorite, isFavorite } from './favorites.js'

const books = [
  { 
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    cover: 'https://covers.openlibrary.org/b/id/8739161-L.jpg'
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Drama',
    cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg'
  }

  
]
const addButtons = document.querySelectorAll('[data-id]')

addButtons.forEach(button => {
  button.addEventListener('click', () =>{
    const bookId = button.getAttribute('data-id')
    const book = books.find(fav => fav.id === bookId)
    if(isFavorite(bookId)) {
      removeFavorite(bookId)
      button.textContent = 'Add to Favorites'
      button.classList.remove('bg-purple-500')
      button.classList.add('bg-yellow-400', 'text-purple-950')
    } else {
      addFavorite(book)
      button.textContent = 'Added to Favorites'
      button.classList.remove('bg-yellow-400', 'text-purple-950')
      button.classList.add('bg-purple-500')
    }
  })
})

function restoreButton() {
  addButtons.forEach(button => {
    const bookId = button.getAttribute('data-id') 
    if(isFavorite(bookId)) {
      button.textContent = 'Added to Favorites'
      button.classList.remove('bg-yellow-400', 'text-purple-950')
      button.classList.add('bg-purple-500', 'text-white')
    }
  })
}
restoreButton()