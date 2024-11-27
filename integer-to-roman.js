const intToRoman = (num) => {
  let result = "";

  const I = 1;
  const V = 5;
  const X = 10;
  const L = 50;
  const C = 100;
  const D = 500;
  const M = 1000;

  switch (num) {
    case I:
      return "I";
    case V:
      return "V";
    case X:
      return "X";
    case L:
      return "L";
    case C:
      return "C";
    case D:
      return "D";
    case M:
      return "M";
  }

  if (num > M) {
    const repeat = Math.floor(num / M);
    result += `${"M".repeat(repeat)}${intToRoman(num - repeat * M)}`;
  } else if (num > D) {
    if (num >= 900) {
      result += `CM${intToRoman(num - 900)}`;
    } else {
      const repeat = Math.floor(num / D);
      if (repeat <= 3) {
        result += `${"D".repeat(repeat)}${intToRoman(num - repeat * D)}`;
      } else {
        result += `DM${repeat(repeat)}${intToRoman(num - repeat * D)}`;
      }
    }
  } else if (num > C) {
    const repeat = Math.floor(num / C);
    if (repeat <= 3) {
      result += `${"C".repeat(repeat)}${intToRoman(num - repeat * C)}`;
    } else {
      result += `${"CD".repeat(1)}${intToRoman(num - repeat * C)}`;
    }
  } else if (num > L) {
    if (num >= 90) {
      result += `${"XC".repeat(1)}${intToRoman(num - 90)}`;
    } else {
      const repeat = Math.floor(num / L);
      if (repeat <= 3) {
        result += `${"L".repeat(repeat)}${intToRoman(num - repeat * L)}`;
      } else {
        result += `${"LC".repeat(1)}${intToRoman(num - repeat * L)}`;
      }
    }
  } else if (num > X) {
    const repeat = Math.floor(num / X);
    if (repeat <= 3) {
      result += `${"X".repeat(repeat)}${intToRoman(num - repeat * X)}`;
    } else {
      result += `${"XL".repeat(1)}${intToRoman(num - repeat * X)}`;
    }
  } else if (num > V) {
    if (num >= 9) {
      result += `${"IX".repeat(1)}${intToRoman(num - 9)}`;
    } else {
      const repeat = Math.floor(num / V);
      if (repeat <= 3) {
        result += `${"V".repeat(repeat)}${intToRoman(num - repeat * V)}`;
      } else {
        result += `${"VX".repeat(1)}${intToRoman(num - repeat * V)}`;
      }
    }
  } else if (num > I) {
    const repeat = Math.floor(num / I);
    if (repeat <= 3) {
      result += `${"I".repeat(repeat)}${intToRoman(num - repeat)}`;
    } else {
      result += `${"IV".repeat(1)}${intToRoman(num - repeat)}`;
    }
  }
  return result;
};

let num = 0;
// const num = 700;
num = 900;
num = 5;
console.log(intToRoman(num));
