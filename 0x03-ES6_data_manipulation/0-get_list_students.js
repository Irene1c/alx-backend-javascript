// function that returns an array of objects

export default function getListStudents() {
  const student1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const student2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const student3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };

  const listStudents = [];
  listStudents.push(student1, student2, student3);

  return listStudents;
}
