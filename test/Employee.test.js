const Employee = require('../classes/Employee');

test('Is this an object?', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
})

test('canSetName', () => {
    const employee = new Employee('Barry');
    expect(employee.name).toBe('Barry');
})

test('canGetName', () => {
    const employee = new Employee('Barry');
    expect(employee.getName()).toBe('Barry');
})

test('canSetId', () => {
    const employee = new Employee('Barry', 123);
    expect(employee.id).toBe(123);
})