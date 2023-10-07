// Tracking within the weakMap the number of times queryAPI is called for each endpoint

// Create a WeakMap instance
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0); // Initialize count to 0
  }

  // Increment the query count
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
