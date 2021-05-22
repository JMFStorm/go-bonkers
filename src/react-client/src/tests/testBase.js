// Test synchronous method with multiple test cases
export const runTestMethods = (testMethod, testCases) => {
  testCases.forEach((c) => {
    test(c.describe, () => {
      const result = testMethod(c.params);
      expect(result).toBe(c.expected);
    });
  });
};
