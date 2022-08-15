const Employee = require("./employee");
//const utilFuncs = require("./utilfuncs");

class Intern extends Employee {
  constructor({ name, id, email, school } = {}) {
    super({ name, id, email });
    this.school = school;
  }

  getSchool(){
    return this.school;
  }

  getRole() {
    return "Intern";
  }
  
  static get questions(){
    return[
        ...super.questions("intern"),
        {
            type: "input",
        message: "Which university your attending",
        name: "school",
        }
    ]
  }
}

module.exports = Intern;