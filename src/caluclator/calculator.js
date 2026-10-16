export const calculator = {
  add: (num1 = 0, num2 = 0) => {
    const convertedNum1 = parseFloat(num1);
    const convertedNum2 = parseFloat(num2);

    if (Number.isNaN(convertedNum1) || Number.isNaN(convertedNum2)) {
      throw new Error("Invalid value");
    }

    return convertedNum1 + convertedNum2;
  },

  subtract: (num1 = 0, num2 = 0) => {
    const convertedNum1 = parseFloat(num1);
    const convertedNum2 = parseFloat(num2);

    if (Number.isNaN(convertedNum1) || Number.isNaN(convertedNum2)) {
      throw new Error("Invalid value");
    }

    return convertedNum1 - convertedNum2;
  },

  divide: (num1 = 1, num2 = 1) => {
    const convertedNum1 = parseFloat(num1);
    const convertedNum2 = parseFloat(num2);

    if (num2 === 0) {
      throw new Error("Error: dividing by zero");
    }

    if (Number.isNaN(convertedNum1) || Number.isNaN(convertedNum2)) {
      throw new Error("Invalid value");
    }

    return num1 / num2;
  },

  multiply: (num1 = 1, num2 = 1) => {
    const convertedNum1 = parseFloat(num1);
    const convertedNum2 = parseFloat(num2);

    if (Number.isNaN(convertedNum1) || Number.isNaN(convertedNum2)) {
      throw new Error("Invalid value");
    }

    return convertedNum1 * convertedNum2;
  },
};
