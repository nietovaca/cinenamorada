const express = require('express');
const { appendFile } = require('fs');
const app = express();

app.use('/')

//PORT 
const port = process.env.PORT || 3000; 

//ESCUSHO
app.listen(port, () => {
  console.log(`Te escusho en puerto ${port}`);
});
