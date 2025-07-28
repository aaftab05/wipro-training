const express = require('express')
const path = require('path')
const app = express()


// Serve static files from the "public" directory
app.use(express.static('public'))

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Route for the about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

// Route for the fibonacci page
app.get('/fibonacci', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'fibonacci.html'))
})

app.get('/factorial', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'factorial.html'));
});
app.get('/palindrome', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'palindrome.html'));
});


app.listen(550);