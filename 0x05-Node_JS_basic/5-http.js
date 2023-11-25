// creating a HTTP server using Node's HTTP module
// Reading a file asynchronously with Node JS

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
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

          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.write('This is the list of our students\n');
          res.write(`Number of students: ${NUMBER_OF_STUDENTS}\n`);

          Object.entries(studentsByField).forEach(([field, { count, list }], index, array) => {
            const lastEntry = index === array.length - 1;
            res.write(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
            if (!lastEntry) {
              res.write('\n');
            }
          });
          res.end();
          resolve();
        } else if (err) {
          reject(new Error('Cannot load the database'));
        }
      });
    });

    const path = process.argv[2];

    countStudents(path)
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.write(`${error.message}`);
        res.end();
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
