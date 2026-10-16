import { describe, test, expect } from "@jest/globals";
import { calculator } from "./calculator.js";

describe("calculator object", () => {
  test("calculator exists", () => {
    expect(calculator).toBeDefined();
  });

  test("calculator is an object literal", () => {
    expect(calculator.constructor === Object).toBe(true);
  });

  test("calculator contains methods for basic operations", () => {
    expect(calculator).toHaveProperty("add");
    expect(calculator).toHaveProperty("subtract");
    expect(calculator).toHaveProperty("divide");
    expect(calculator).toHaveProperty("multiply");
  });

  describe("add method", () => {
    test("adds positive and negative numbers", () => {
      expect(calculator.add(1, -5)).toBe(-4);
      expect(calculator.add(1.5, 0)).toBe(1.5);
    });

    test("accepts numbers as strings", () => {
      expect(calculator.add("02", -4)).toBe(-2);
      expect(calculator.add("+022.22", "-022.22")).toBe(0);
    });

    test("allows omitting arguments", () => {
      expect(calculator.add()).toBe(0 + 0);
    });

    test("handles invalid values", () => {
      expect(() => calculator.add(null, [8])).toThrow("Invalid value");
    });
  });

  describe("subtract method", () => {
    test("subtracts positive, negative, and decimal numbers", () => {
      expect(calculator.subtract(-1.2, 1.5)).toBe(-2.7);
    });

    test("accepts numbers as strings", () => {
      expect(calculator.subtract("-233.21", -233.21)).toBe(0);
      expect(calculator.subtract("12", "6")).toBe(6);
    });

    test("allows omitting arguments", () => {
      expect(calculator.subtract(-2)).toBe(-2 - 0);
    });

    test("handles invalid values", () => {
      expect(() => calculator.subtract(NaN, false)).toThrow("Invalid value");
    });
  });

  describe("divide method", () => {
    test("accepts numbers as strings", () => {
      expect(calculator.divide("0", 2)).toBe(0);
    });

    test("allows omitting arguments", () => {
      expect(calculator.divide(20)).toBe(20);
    });

    test("handles dividing by 0", () => {
      expect(() => calculator.divide(10, 0)).toThrow("Error: dividing by zero");
    });

    test("handles invalid values", () => {
      expect(() => calculator.divide(null, null)).toThrow("Invalid value");
    });
  });

  describe("multiply method", () => {
    test("accepts numbers as strings", () => {
      expect(calculator.multiply("001.212", -132.21)).toBe(1.212 * -132.21);
    });

    test("allows omitting arguments", () => {
      expect(calculator.multiply()).toBe(1 * 1);
    });

    test("handles invalid values", () => {
      expect(() => calculator.multiply("1Hi11", "Say111")).toThrow(
        "Invalid value",
      );
    });
  });
});
