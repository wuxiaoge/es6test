
export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    return `My name is ${this.name}, I am ${this.age} years old !`;
  }
}

