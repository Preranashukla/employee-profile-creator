const Employee = require('../lib/employee.js');

const employeeTest = new Employee ("Prerana",1,"Shuklaprerana01@gmail.com" , "Employee");


describe('employee', () => {
    it('has a name', () => {
        expect(employeeTest.name).toEqual(expect.any(String))
        expect(employeeTest.name.length).toBeGreaterThan(2)
    })

    it('has an email id', () =>{
        expect(employeeTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an id that is a num', () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })

    it('has a role of employee', () => {
        expect(employeeTest.role).toBe('Employee')
    })

})
