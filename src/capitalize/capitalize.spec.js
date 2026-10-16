import { describe, test, expect } from "@jest/globals";
import { capitalize } from "./capitalize.js";

describe("capitalize a string", () => {
  test("capitalize function exists", () => {
    expect(capitalize).toBeDefined();
  });

  test("works with non-capitalized words", () => {
    expect(capitalize("another")).toBe("Another");
  });

  test("works with already capitalized words", () => {
    expect(capitalize("Capitalized")).toBe("Capitalized");
  });

  test("works with words that has multiple upper case letters", () => {
    expect(capitalize("UpPeR")).toBe("Upper");
    expect(capitalize("eRROR")).toBe("Error");
  });

  test("works with multiple words", () => {
    expect(capitalize("capitalize each word")).toBe("Capitalize Each Word");
    expect(capitalize("A And")).toBe("A And");
    expect(capitalize("A weiRD SeNTencE")).toBe("A Weird Sentence");
  });

  test("works with empty strings", () => {
    expect(capitalize("")).toBe("");
  });

  test("handles invalid values", () => {
    expect(() => capitalize(null)).toThrow("Invalid value");
    expect(() => capitalize(11)).toThrow("Invalid value");
  });
});
