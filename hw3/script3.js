class ZooAnimal {
  #name;
  #age;
  #gender;
  static maxAge = 20;

  constructor(name, age, gender) {
    this.#name = name;

    if (gender === 'male' || gender === 'female') {
      this.#gender = gender;
    } else {
      throw new Error("Gender not valid!");
    }

    this.changeAge(age);
  }

  changeName(newName) {
    this.#name = newName;
  }

  changeAge(newAge) {
    if (newAge > 0 && newAge <= ZooAnimal.maxAge) {
      this.#age = newAge;
    } else {
      throw new Error("Age not valid!");
    }
  }

  getAnimalInfo() {
    return `Name:${this.#name}\nAge:${this.#age}\nGender:${this.#gender}`;
  }
}

const Animal = new ZooAnimal("Dog1", 5, "male");
console.log(Animal.getAnimalInfo());
const Animal2 = new ZooAnimal("Dog2", 25, "male");
console.log(Animal2.getAnimalInfo());