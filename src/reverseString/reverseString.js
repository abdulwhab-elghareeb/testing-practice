export function reverseString(str) {
  if (typeof str != "string") {
    throw new Error("Invalid value");
  }

  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
