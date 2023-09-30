// function that return an array of 3 ClassRoom objects with the sizes 19, 20, and 34

import ClassRoom from './0-classroom.js'; // eslint-disable-line

export default function initializeRooms() {
  const obj = [];
  const sizes = [19, 20, 34];

  for (const val of sizes) {
    const room = new ClassRoom(val);
    obj.push(room);
  }
  return obj;
}
