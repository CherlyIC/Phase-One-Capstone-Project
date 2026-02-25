#  Book Explorer


---

##  Live Features

-  **Search Books** — Search millions of books by title using the Open Library API
-  **Save Favorites** — Add and remove books from your personal favorites list
-  **Persistent Storage** — Favorites are saved in localStorage and survive page refreshes
- **Fully Responsive** — Works beautifully on mobile, tablet, and desktop

---

##  Technology used:

- **HTML5** — Page structure and semantics
- **Tailwind CSS** (CDN) — Styling and responsive design
- **JavaScript ES6** — Interactivity and logic
- **ES6 Modules** — Clean, organised, modular code
- **Open Library API** — Real book data
- **localStorage** — Client-side data persistence
- **GitHub** — Version control and collaboration



##  How to Run

1. Clone the repository:
```
git clone https://github.com/CherlyIC/Phase-One-Capstone-Project.git
```

2. Open the project folder in VS Code

3. Install the **Live Server** extension in VS Code

4. Right click on `index.html` and click **Open with Live Server**



##  How to Use

1. **Browse Books** — The homepage loads popular books automatically on arrival
2. **Search** — Type any book title in the search bar and click Search or press Enter
3. **Add to Favorites** — Click the  button on any book card to save it
4. **View Favorites** — Click Favorites in the navbar to see your saved books
5. **Remove Favorites** — Click the Remove button on the favorites page



##  API Reference

This app uses the **Open Library Search API**:
```
https://openlibrary.org/search.json?q={searchTerm}&limit=12
```

Book covers are loaded from:
```
https://covers.openlibrary.org/b/id/{coverId}-M.jpg
```

Full API documentation: [https://openlibrary.org/developers/api](https://openlibrary.org/developers/api)

