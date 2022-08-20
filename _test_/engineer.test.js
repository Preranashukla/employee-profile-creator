const Engineer = require('../lib/engineer.js');


const engineerTest = new Engineer ("Prerana","Shuklaprerana01@gmail.com", 2 , "Engineer",'Usernamehere');


describe('Engineer', () => {
    it('github name', () => {
        expect(engineerTest.getGithub()).toBe("Usernamehere")

    })

})
