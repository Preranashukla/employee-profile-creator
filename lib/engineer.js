const Employee = require("./employee");
//const utilFuncs = require("./utilfuncs");

class Engineer extends Employee {
  constructor({ name, id, email, github } = {}) {
    super({ name, id, email });
    this.github = github;
  }

  getGithub(){
    return this.github
  }

  getRole() {
    return "Engineer";
  }
  
  static get questions(){
    return[
        ...super.questions("engineer"),
        {
            type: "input",
        message: "What's your github account?",
        name: "github",
        }
    ]
  }
}

module.exports = Engineer;