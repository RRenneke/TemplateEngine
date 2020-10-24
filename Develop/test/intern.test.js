const Intern = require("../lib/Intern");

test("Can set school through intern.js", () => {
  const testValue = "University of MN";
  const newE = new Intern("Lala", 1, "test@test.com", testValue);
  expect(newE.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const newE = new Intern("Lala", 1, "test@test.com", "University of MN");
  expect(newE.getRole()).toBe(testValue);
});

test("Can get school through getSchool()", () => {
  const testValue = "University of MN";
  const newE = new Intern("Lala", 1, "test@test.com", testValue);
  expect(newE.getSchool()).toBe(testValue);
});