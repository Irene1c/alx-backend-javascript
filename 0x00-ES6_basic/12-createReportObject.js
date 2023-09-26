export default function createReportObject(employeesList) {
  const data = { ...employeesList };

  const report = {
    allEmployees: data,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return report;
}
