export function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid value");
  }

  if (arr.some((val) => typeof val !== "number")) {
    throw new Error("Invalid value in array");
  }

  return {
    average: limitDecimals(
      arr.reduce((sum, curr) => sum + curr) / arr.length,
      2,
    ),
    min: arr.toSorted().at(0),
    max: arr.toSorted().at(-1),
    length: arr.length,
  };
}

function limitDecimals(num, decimalLimit = 3) {
  let limit = 10 ** decimalLimit;
  return Math.round(num * limit) / limit;
}
