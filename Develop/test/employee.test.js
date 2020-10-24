const Employee = require("../lib/Employee");

test("Can create Employee instance", () => {
  const newE = new Employee();
  expect(typeof(newE)).toBe("object");
});

test("Can set name through employee.js", () => {
  const name = "James";
  const newE = new Employee(name);
  expect(newE.name).toBe(name);
});

test("Can set id through employee.js", () => {
  const testValue = 100;
  const newE = new Employee("Lala", testValue);
  expect(newE.id).toBe(testValue);
});

test("Can set email through employee.js", () => {
  const testValue = "test@test.com";
  const newE = new Employee("Lala", 1, testValue);
  expect(newE.email).toBe(testValue);
});

test("Can get name through getName()", () => {
  const testValue = "James";
  const newE = new Employee(testValue);
  expect(newE.getName()).toBe(testValue);
});

test("Can get id through getId()", () => {
  const testValue = 100;
  const newE = new Employee("Lala", testValue);
  expect(newE.getId()).toBe(testValue);
});

test("Can get email through getEmail()", () => {
  const testValue = "test@test.com";
  const newE = new Employee("Lala", 1, testValue);
  expect(newE.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const newE = new Employee("James", 1, "test@test.com");
  expect(newE.getRole()).toBe(testValue);
});