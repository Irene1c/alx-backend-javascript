// Function that returns an updated map for all items with initial quantity at 1

export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const [key, value] of map.entries()) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
}
