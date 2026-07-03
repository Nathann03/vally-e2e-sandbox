// Core calculator logic (pure functions, easy to unit-test).
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function mul(a, b) {
  return a * b;
}

export function div(a, b) {
  if (b === 0) throw new Error("division by zero");
  return a / b;
}

export function abs(a, _b) {
  return Math.abs(a);
}

export const OPS = { add, sub, mul, div, abs };
