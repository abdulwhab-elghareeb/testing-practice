export function caesarCipher(str, shiftCount) {
  if (typeof str !== "string" || typeof shiftCount !== "number") {
    throw new Error("Invalid value type");
  }

  const alphabetTable = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return str
    .split("")
    .map((char) => shiftChar(alphabetTable, char, shiftCount))
    .join("");
}

function shiftChar(arr, char, shiftCount) {
  if (!arr.includes(char.toLowerCase())) return char;

  const charIsUpper = char === char.toUpperCase() ? true : false;
  const charIndex = arr.indexOf(char.toLowerCase()) + shiftCount;
  let output = arr[charIndex % arr.length];

  return charIsUpper ? output.toUpperCase() : output;
}
