export function capitalize(str) {
  if (typeof str != "string") {
    throw new Error("Invalid value");
  }

  return str
    ? str
        .split(" ")
        .map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
        .join(" ")
    : str;
}
