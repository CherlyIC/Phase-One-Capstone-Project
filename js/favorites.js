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