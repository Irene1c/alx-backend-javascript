// function that returns an array of objects who are located in a specific city

export default function getStudentsByLocation(students, city) {
  const result = students.filter((obj) => obj.location === city);
  return result;
}
