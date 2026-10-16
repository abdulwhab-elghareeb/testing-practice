import { describe, test, expect } from "@jest/globals";
import { reverseString } from "./reverseString.js";

describe("reverseString", () => {
  test("reverseString function exists", () => {
    expect(reverseString).toBeDefined();
  });

  test("works with a single word", () => {
    expect(reverseString("JavaScript")).toBe("tpircSavaJ");
  });

  test("works with a single word mixed with symbols & numbers", () => {
    expect(reverseString("$#()@&FJ3213(%jf")).toBe("fj%(3123JF&@)(#$");
  });

  test("works with multiple words", () => {
    expect(reverseString("MUltiPle woRds StRIng")).toBe(
      "elPitlUM sdRow gnIRtS",
    );
  });

  test("works with multiple words mixed with symbols & numbers", () => {
    expect(reverseString("32j()(%* json) (12jsGH_(! ")).toBe(
      "*%()(j23 )nosj !(_HGsj21( ",
    );
  });

  test("works with empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("handles invalid values", () => {
    expect(() => reverseString(null)).toThrow("Invalid value");
    expect(() => reverseString(11)).toThrow("Invalid value");
  });
});
