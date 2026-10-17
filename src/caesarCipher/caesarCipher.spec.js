import { describe, test, expect } from "@jest/globals";
import { caesarCipher } from "./caesarCipher.js";

describe("caesarCipher function", () => {
  test("the function exists", () => {
    expect(caesarCipher).toBeDefined();
  });

  test("shifts letters", () => {
    expect(caesarCipher("x", 3)).toBe("a");
    expect(caesarCipher("Y", 10)).toBe("I");
  });

  test("works with words", () => {
    expect(caesarCipher("abcd", 3)).toBe("defg");
    expect(caesarCipher("caesarCipher", 100)).toBe("ywaownYeldan");
  });

  test("works with multiple words", () => {
    expect(caesarCipher("I Hope IT workS", 9)).toBe("R Qxyn RC fxatB");
    expect(caesarCipher("SHOIUL JO ssdwqat jojl", 1421)).toBe(
      "JYFZLC AF jjunhrk afac",
    );
  });

  test("ignores non-alphabetical characters", () => {
    expect(caesarCipher("1how, Par9t., $", 2)).toBe("1jqy, Rct9v., $");
  });

  test("handles invalid value types", () => {
    expect(() => caesarCipher(null, 3)).toThrow("Invalid value type");
    expect(() => caesarCipher("Hello", "hi")).toThrow("Invalid value type");
  });
});
