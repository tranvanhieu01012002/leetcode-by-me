/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;

  const I = 1;
  const V = 5;
  const X = 10;
  const L = 50;
  const C = 100;
  const D = 500;
  const M = 1000;

  switch (s) {
    case "I":
      return I;
    case "V":
      return V;
    case "X":
      return X;
    case "L":
      return L;
    case "C":
      return C;
    case "D":
      return D;
    case "M":
      return M;
  }

  const subS = s.slice(0, 2);
  const subS1 = s.slice(0, 1);

  if ("CM" == subS) {
    result = romanToInt(s.slice(2)) + (M - C);
  } else if ("CD" == subS) {
    result = romanToInt(s.slice(2)) + (D - C);
  } else if ("XC" == subS) {
    result = romanToInt(s.slice(2)) + (C - X);
  } else if ("XL" == subS) {
    result = romanToInt(s.slice(2)) + (L - X);
  } else if ("IX" == subS) {
    result = romanToInt(s.slice(2)) + (X - I);
  } else if ("IV" == subS) {
    result = romanToInt(s.slice(2)) + (V - I);
  } else if ("M" == subS1) {
    result = romanToInt(s.slice(1)) + M;
  } else if ("D" == subS1) {
    result = romanToInt(s.slice(1)) + D;
  } else if ("C" == subS1) {
    result = romanToInt(s.slice(1)) + C;
  } else if ("L" == subS1) {
    result = romanToInt(s.slice(1)) + L;
  } else if ("X" == subS1) {
    result = romanToInt(s.slice(1)) + X;
  } else if ("V" == subS1) {
    result = romanToInt(s.slice(1)) + V;
  } else if ("I" == subS1) {
    result = romanToInt(s.slice(1)) + I;
  }
  return result;
};

let s = "M";
s = "III";
s = "LVIII";
console.log(romanToInt(s));
