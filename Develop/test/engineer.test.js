const Engineer = require("../lib/Engineer");

test("Can set GitHUb through engineer.js", () => {
  const testValue = "GitHubUser";
  const newE = new Engineer("Lala", 1, "test@test.com", testValue);
  expect(newE.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const newE = new Engineer("Lala", 1, "test@test.com", "GitHubUser");
  expect(newE.getRole()).toBe(testValue);
});

test("Can get GitHub username through getGithub()", () => {
  const testValue = "GitHubUser";
  const newE = new Engineer("Lala", 1, "test@test.com", testValue);
  expect(newE.getGithub()).toBe(testValue);
});