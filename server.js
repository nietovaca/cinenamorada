const express = require('express');
const app = express();
const moviesArray = require('./Models/movies')

app.get('/', (req, res) => {
  res.send(`The movies we've watched`);
})

app.get('/2021', (req, res) => {
  res.render(
    `2021.ejs`, 
    {
      myMovies: moviesArray
    }
    )
})

app.get('/2021/:indexOfMoviesArray', (req, res) => {
  res.send( `movie description: ${movies[req.params.indexOfMoviesArray]}`)
})

//PORT 
const port = process.env.PORT || 3000; 

//ESCUSHO
app.listen(port, () => {
  console.log(`Te escusho en puerto ${port}`);
});
