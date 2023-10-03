// function that returns an array of ids from a list of objects

export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const arrIds = arr.map((obj) => obj.id);
  return arrIds;
}
