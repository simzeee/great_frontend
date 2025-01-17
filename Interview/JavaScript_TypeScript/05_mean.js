export default function mean(array) {
  return array.length === 0
    ? NaN
    : array.reduce((a, b) => a + b) / array.length;
}
