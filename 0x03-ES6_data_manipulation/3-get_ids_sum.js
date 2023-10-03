// function that returns the sum of all the student ids

export default function getStudentIdsSum(students) {
  const sum = students.reduce((total, currentId) => total + currentId.id, 0);
  return sum;
}
