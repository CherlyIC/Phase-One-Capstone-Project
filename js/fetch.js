export async function searchBooks(query){
  try{
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=12&fields=key,title,author_name,cover_i,subject`

    console.log('fetching from URL:', url)
    const response = await fetch(url)
    if(!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }
    const data = await response.json()
    console.log('API response data:', data)

    const books = data.docs.map(book => ({
      id: book.key,
      title: book.title,
      autor: book.author_name ? book.author_name[0] : 'Unknown Author',
      genre: book.subject ? book.subject[0] : 'Unknown Genre',
      cover: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'https://via.placeholder.com/150x200?text=No+Cover'
    }))

    return books
  } catch(error) {
    console.error('Error searching books:', error)
  }
}