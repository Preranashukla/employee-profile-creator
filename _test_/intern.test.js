const Intern = require('../lib/intern.js');


const internTest = new Intern ("Prerana","Shuklaprerana01@gmail.com", 2 , "Intern","Universityname");


describe('Intern', () => {
    it('University Name here', () => {
        expect(internTest.getSchool()).toBe("Universityname")

    })

})
