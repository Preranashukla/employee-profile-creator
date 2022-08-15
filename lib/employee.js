// Define class using class declaration
class employee {
    // Initializes object created with class
    constructor(name, id, email) {
      // The 'this' keyword refers to the current object
      this.name = name;
      this.id = id;
      this.email = email;
    }
    // Method that holds functionality needed to process employee data.
    getName() {
        return this.name;
      }
    
      getID() {
        return this.id;
      }
    
      getEmail() {
        return this.email;
      }
    
      getRole() {
        return "Employee";
      }
    
      static questions(role = "employee") {
        return [
          {
            type: "input",
            message: `What is the ${role}'s name?`,
            validate: utilFuncs.validateStringContent,
            filter: utilFuncs.stringTrim,
            name: "name",
          },
          {
            type: "input",
            message: `What is the ${role}'s ID?`,
            validate: utilFuncs.validateID,
            filter: utilFuncs.stringTrim,
            name: "id",
          },
          {
            type: "input",
            message: `What is the ${role}'s email?`,
            validate: utilFuncs.validateEmail,
            filter: utilFuncs.stringTrim,
            name: "email",
          },
        ];
      }
    }
    
    module.exports = Employee;