import { describe, test, expect } from "@jest/globals";
import { analyzeArray } from "./analyzeArray.js";

describe("analyzeArray function", () => {
  test("the function exists", () => {
    expect(analyzeArray).toBeDefined();
  });

  test("returns an object with average, min, max, length properties", () => {
    const arr = [1, 4, 2, 9];
    const requiredProperties = ["average", "min", "max", "length"];

    requiredProperties.forEach((property) =>
      expect(analyzeArray(arr)).toHaveProperty(property),
    );
  });

  test("works normally", () => {
    expect(analyzeArray([5, 9, 3, 1])).toMatchObject({
      average: 4.5,
      min: 1,
      max: 9,
      length: 4,
    });

    expect(analyzeArray([1])).toMatchObject({
      average: 1,
      min: 1,
      max: 1,
      length: 1,
    });
  });

  test("handles long decimals", () => {
    expect(analyzeArray([7, 1, 3, 4, 2, 1, -2])).toMatchObject({
      average: 2.29,
      min: -2,
      max: 7,
      length: 7,
    });
  });

  test("handles invalid values", () => {
    expect(() => analyzeArray(null)).toThrow("Invalid value");
    expect(() => analyzeArray([1, 3, "oops", 8])).toThrow(
      "Invalid value in array",
    );
  });
});
