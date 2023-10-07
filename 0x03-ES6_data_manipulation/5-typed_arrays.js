// function that returns a new ArrayBuffer with an Int8 value at a specific position

export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) {
    throw new Error('Position outside range');
  }
  // Create an ArrayBuffer
  const arrayBuffer = new ArrayBuffer(length);

  // Create an Int8Array from the ArrayBuffer
  const int8Array = new Int8Array(arrayBuffer);

  // Set value at specified position
  int8Array[position] = value;

  // Create a DataView from the ArrayBuffer
  const dataView = new DataView(arrayBuffer);

  return dataView;
}
