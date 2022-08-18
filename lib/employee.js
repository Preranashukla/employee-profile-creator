// Define class using class declaration
class Employee {
    // Initializes object created with class
    constructor(name, id, email,role) {
      // The 'this' keyword refers to the current object
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
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
        return this.role;
      }
    }
    
    module.exports = Employee;
