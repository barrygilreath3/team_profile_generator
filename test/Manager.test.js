const Manager = require('../classes/Manager');
const Employee = require('../classes/Employee');

test('canGetOfficeNumber', () => {
    const manager = new Manager('Barry', 123, 'me@me.com', 12);
    expect(manager.office).toBe(12);
});