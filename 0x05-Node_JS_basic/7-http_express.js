// creating a HTTP server using Express
// Reading a file asynchronously with Node JS

const express = require('express');
const fs = require('fs');

const app = express();
const hostname = '127.0.0.1';
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const countStudents = (path) => new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (data) {
        // trim since CSV file can contain empty lines (at the end)
        const rows = data.trim().split('\n');
        const NUMBER_OF_STUDENTS = rows.length - 1;

        const parsedData = rows
          .slice(1)
          .map((line) => line.split(','))
          .map((fields) => ({ firstname: fields[0], field: fields[3] }));

        const studentsByField = parsedData.reduce((acc, { firstname, field }) => {
          if (!acc[field]) {
            acc[field] = { count: 1, list: [firstname] };
          } else {
            acc[field].count += 1;
            acc[field].list.push(firstname);
          }

          return acc;
        }, {});

        const response = [];
        response.push('This is the list of our students\n');
        response.push(`Number of students: ${NUMBER_OF_STUDENTS}\n`);

        Object.entries(studentsByField).forEach(([field, { count, list }], index, array) => {
          const lastEntry = index === array.length - 1;
          response.push(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
          if (!lastEntry) {
            response.push('\n');
          }
        });
        res.send(response.join(''));
        resolve();
      } else if (err) {
        reject(new Error('Cannot load the database'));
      }
    });
  });

  const path = process.argv[2];

  countStudents(path)
    .catch((error) => {
      const err = [];
      err.push('This is the list of our students\n');
      err.push(`${error.message}`);
      res.send(err.join(''));
    });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
