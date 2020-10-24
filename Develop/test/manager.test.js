const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number through mananger.js", () => {
  const testValue = 100;
  const newE = new Manager("Lala", 1, "test@test.com", testValue);
  expect(newE.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const newE = new Manager("Lala", 1, "test@test.com", 100);
  expect(newE.getRole()).toBe(testValue);
});

test("Can get office number through getOffice()", () => {
  const testValue = 100;
  const newE = new Manager("Lala", 1, "test@test.com", testValue);
  expect(newE.getOfficeNumber()).toBe(testValue);
});