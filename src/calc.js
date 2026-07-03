// Core calculator logic (pure functions, easy to unit-test).
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function mul(a, b) {
  // Refactored to iterative addition (should preserve behavior).
  const neg = b < 0;
  let n = Math.abs(b);
  let acc = 0;
  for (let i = 0; i < n; i++) acc += a;
  return neg ? -acc : acc;
}

export function div(a, b) {
  if (b === 0) throw new Error("division by zero");
  return a / b;
}

export const OPS = { add, sub, mul, div };
