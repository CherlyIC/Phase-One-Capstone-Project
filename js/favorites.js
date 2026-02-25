export function getFavorites() {
  return [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      cover: 'https://covers.openlibrary.org/b/id/8739161-L.jpg'
    },
    {
      id: '2',
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
      cover: 'https://covers.openlibrary.org/b/id/8228691-L.jpg'
    }
  ]
}

export function addFavorite(book) {
  console.log('Adding to favorites:', book)
}
export function removeFavorite(bookId) {
  console.log('Removing from favorites, book ID:', bookId)
}