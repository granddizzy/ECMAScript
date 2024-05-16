class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }

  getInfo() {
    return `Name:${this.#name}`;
  }

  getName() {
    return this.#name;
  }
}

class Manager extends Employee {
  #department;

  constructor(name, department) {
    super(name);
    this.#department = department;
  }

  getInfo() {
    return `Name:${super.getName()}\nDepartment:${this.#department}`;
  }
}

const employee = new Employee('John Smith');
console.log(employee.getInfo());

const manager = new Manager('Jane Doe', 'Sales');
console.log(manager.getInfo());