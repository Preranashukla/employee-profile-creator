const Employee = require("./employee");


class Manager extends Employee {
  constructor(name, id, email,role, office  ) {
    super(name, id, email,role );
    this.office = office;
  }

  getOfficeNo(){
    return this.office;
  }

  getRole(){
    return 'Manager'
  }

}

module.exports = Manager;
