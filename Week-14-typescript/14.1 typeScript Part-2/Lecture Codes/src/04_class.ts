// Define an interface
interface Person1 {
    name: string;
    age: number;
    greet(): string;
  }
  
  // Implement the interface in a class
  class Employee implements Person1 {
    name: string;
    age: number;
    position: string; // Extra property not in interface
  
    constructor(name: string, age: number, position: string) {
      this.name = name;
      this.age = age;
      this.position = position;
    }
  
    // Implementing the greet method from the interface
    greet(): string {
      return `Hello, my name is ${this.name}, and I am a ${this.position}.`;
    }
  }
  
  const emp = new Employee("Alice", 30, "Software Engineer");
  console.log(emp.greet()); // Hello, my name is Alice, and I am a Software Engineer.
  