// function that returns an array of students for a specific city with their new grade

export default function updateStudentGradeByCity(students, city, newGrades) {
  const result = students.filter((obj) => obj.location === city)
    .map((obj) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === obj.id);
      const grade = gradeObject ? gradeObject.grade : 'N/A';
      return {
        id: obj.id,
        firstName: obj.firstName,
        location: obj.location,
        grade,
      };
    });
  return result;
}
