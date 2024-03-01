import importGreet from "./greet.js";

importGreet();

//importando variavel
import { x } from "./variable.js"; // por ser uma desestruturação x deve ser importado entre chaves

console.log(x);

//múltiplas importações
import { a, b, c, d as array, myFunction } from "./multiple.js";

console.log(a);
console.log(b);
console.log(c);
console.log(array);
myFunction();

//importando um arquivo inteiro
import * as myNumbers from "./numbers.js";

console.log(myNumbers);
console.log(myNumbers.n1);
console.log(myNumbers.n4);

//importando tipos
import { Human } from "./myType.js";

class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new User("Pedro", 19);
console.log(user);
