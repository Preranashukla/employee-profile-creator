const Manager = require('../lib/manager.js');


const managerTest = new Manager ("Prerana","Shuklaprerana01@gmail.com", 2 , "Manager","6474489310");


describe('Manager', () => {
    it('Office No here', () => {
        expect(managerTest.getOfficeNo()).toBe("6474489310")

    })

})
