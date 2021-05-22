const supertest = require("supertest");
const app = require("../server/express");

const api = supertest(app);

// Test synchronous method with multiple test cases
const runTestMethods = (testMethod, testCases) => {
  testCases.forEach((c) => {
    test(c.describe, () => {
      const result = testMethod(c.params);
      expect(result).toBe(c.expected);
    });
  });
};

const testPostApi = async ({ url, body, expectCode, token }) => {
  const response = await api
    .post(url)
    .send(body)
    .auth(token, { type: "bearer" })
    .expect(expectCode)
    .expect("Content-Type", /application\/json/);
  return response.body;
};

const testDeleteApi = async ({ url, expectCode, token }) =>
  await api.delete(url).auth(token, { type: "bearer" }).expect(expectCode);

module.exports = {
  runTestMethods,
  testDeleteApi,
  testPostApi,
};
