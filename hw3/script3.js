class ZooAnimal {
  #name;
  #age;
  #gender;
  static maxAge;

  constructor(name, age, gender) {
    ZooAnimal.maxAge = 20;

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
    return `Name:${this.#name} Age:${this.#age} Gender:${this.#gender}`;
  }
}

const Animal = new ZooAnimal("Dog1", 5, "male");
console.log(Animal.getAnimalInfo());