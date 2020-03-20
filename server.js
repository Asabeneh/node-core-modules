// Node core modules
const http = require('http') // to create server
const fs = require('fs') // to create, read, write and edit file
const path = require('path') // to deal with file paths and file names

// read, write, delete, rewrite, append,

// __dirname, to access the current directory path
// __filename to acces the current filename


console.log('what is dirname', __dirname + '/index.html')
console.log('filename', __filename)
const filename = path.basename(__dirname)
console.log(filename)

console.log('To know the file extension', path.extname(__filename))

const fullPath = path.join(__dirname, '/index.html')
console.log(fullPath)

console.log(path.join(__dirname, '/templates/index.html'))
const PORT = 5000
const students = [
  {
    firstName: 'Asab',
    lastName: 'Yeta',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React']
  },
  {
    firstName: 'Atik',
    lastName: 'Rhaman',
    age: 25,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node']
  },
  {
    firstName: 'Bibek',
    lastName: 'Dhakal',
    age: 21,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'MongoDB']
  },
  {
    firstName: 'Arthur',
    lastName: 'Arthur',
    age: 25,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Redux']
  }
]

const callback = (req, res) => {
  // headers
  if (req.url == '/' && req.method === 'GET') {
    let path = __dirname + '/templates/index.html'
    fs.readFile(path, (err, data) => {
      if (err) {
        res.write('File was not found')
      }
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      res.end()
    })
  } else if (req.url == '/about') {
    fs.readFile(__dirname + '/templates/about.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      res.end()
    })
  } else if (req.url == '/contact') {
    fs.readFile(__dirname + '/templates/contact.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      res.end()
    })
  } else if (req.url == '/text') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('This is going to have some text, and it is text plain')
    res.end()
  } else if (req.url == '/api/v.1.0/students') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    const json = JSON.stringify(students)
    res.write(json)
    res.end()
  } else if (req.url == '/add' && req.method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    const student = {
      firstName: 'New Name',
      lastName: 'New family name',
      age: 25,
      country: 'Finland',
      skills: ['HTML', 'CSS', 'JS', 'React', 'Redux']
    }
    students.push(student)
    res.write('data is added')
    res.end()
  } else if (req.url == '/students/1' && req.method === 'PUT') {
    res.write('this is going to editing path')
    res.end()
  } else if (req.url == '/students/1' && req.method === 'DELETE') {
    res.write('this is going to DELETING path')
    res.end()
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('<h1>Page was not found: 404</h1>')
    res.end()
  }
}

http.createServer(callback).listen(PORT)
console.log(`The server is running at port ${PORT}`)

// Different request methods: GET, POST, PUT and DELETE
// CRUD using the above post methods
