//type guard
function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log(`Os dados devem ser do mesmo tipo`);
  }
}

sum("1", "2");
sum(301, 2342);
sum(301, "2");

//checando se valor existe
function operations(arr: number[], operation?: string | undefined): void {
  if (operation) {
    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total);
      console.log(sum);
    } else if (operation === "multiply") {
      const mult = arr.reduce((i, total) => i * total);
      console.log(mult);
    }
  } else {
    console.log("Por favor defina uma operação");
  }
}

operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([3, 3], "multiply");

//instance of - checa se um dado pertence a uma determinada classe
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const p1 = new User("Pedro");
const p2 = new SuperUser("Adair");
console.log(p1);
console.log(p2);

function userGreeting(user: Object) {
  if (user instanceof SuperUser) {
    console.log(`${user.name} é um super usuário`);
  } else if (user instanceof User) {
    console.log(`${user.name} é um usuário comum`);
  }
}

userGreeting(p1);
userGreeting(p2);

//in - verifica se existe tal propriedade no obj
class Dog {
  name;
  breed;

  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) {
      this.breed = breed;
    }
  }
}

const bel = new Dog("Bel")
const aries = new Dog("Aries", "Rottweiler")

function showDogDetails(dog: Dog) {

    if('breed' in dog) {
        console.log(`${dog.name} pertence a raça ${dog.breed}`)
    } else {
        console.log(` o cachorro não possui raça definida (SRD)`)
    }
}

showDogDetails(bel)
showDogDetails(aries)


//ex3

function review(name: string, stars: number | boolean) {
    if(typeof stars === 'boolean') {
        console.log(`${name} não avaliou o filme, descrição não informada`)
        return
     }
     return console.log(`${name} avaliou o filme em ${stars} estrelas e deixou uma review`)
}

review("Jonas", 5)
review("Pedro", false)