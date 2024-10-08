// Faktorial
function faktorial(n) {
  if (n === 0) return 1;

  return n * faktorial(n - 1);
}

console.log(faktorial(5));

// catatan
// faktorial(5)
// return 5 * faktorial(4)
// return 5 * 4 * faktorial(3)
// return 5 * 4 * 3 faktorial(2)
// return 5 * 4 * 3 * 2 faktorial(1)
// return 5 * 4 * 3 * 2 * 1 * faktorial(0)
// return 5 * 4 * 3 * 2 * 1 * 1
