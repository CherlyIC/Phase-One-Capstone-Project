console.log("Book Explorer app Loaded");
import { getFavorites } from './favorites.js'

// We call getFavorites() and store the result in a variable
const favorites = getFavorites()

// We print the favorites list to the console so we can
// verify that the import and function are working correctly
console.log('Current favorites:', favorites)