// Reading a file asynchronously with Node JS

const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (data) {
      // trim since CSV file can contain empty lines (at the end)
      const rows = data.trim().split('\n');
      const NUMBER_OF_STUDENTS = rows.length - 1;
      console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

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

      Object.entries(studentsByField).forEach(([field, { count, list }]) => {
        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      });
      resolve();
    } else if (err) {
      reject(new Error('Cannot load the database'));
    }
  });
});

module.exports = countStudents;
