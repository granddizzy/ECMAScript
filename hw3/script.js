class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }

  getInfo() {
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
    return `${super.getInfo()} ${this.#department}`;
  }
}

const employee = new Employee('John Smith');
console.log(employee.getInfo());

const manager = new Manager('Jane Doe', 'Sales');
console.log(manager.getInfo());