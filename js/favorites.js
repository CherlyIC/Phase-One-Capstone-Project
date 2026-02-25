let favorites = []

export function getFavorites() {
  return favorites
}

export function addFavorite(book) {
  const existing = favorites.find(fav => fav.id === book.id)
  if(!existing) {
    favorites.push(book)
    console.log('Added to favorites:', book.title)
  } else{
    console.log('Book already in favorites:', book.title)
  }

}
export function removeFavorite(bookId) {
  favorites = favorites.filter(fav => fav.id !== bookId)
  console.log('Removed book with ID:', bookId)
}

export function isFavorite(bookId) {
  return favorites.some(fav => fav.id === bookId)
}