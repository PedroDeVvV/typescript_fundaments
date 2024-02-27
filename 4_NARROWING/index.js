var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Os dados devem ser do mesmo tipo");
    }
}
sum("1", "2");
sum(301, 2342);
sum(301, "2");
//checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            var sum_1 = arr.reduce(function (i, total) { return i + total; });
            console.log(sum_1);
        }
        else if (operation === "multiply") {
            var mult = arr.reduce(function (i, total) { return i * total; });
            console.log(mult);
        }
    }
    else {
        console.log("Por favor defina uma operação");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([3, 3], "multiply");
//instance of - checa se um dado pertence a uma determinada classe
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var p1 = new User("Pedro");
var p2 = new SuperUser("Adair");
console.log(p1);
console.log(p2);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log("".concat(user.name, " \u00E9 um super usu\u00E1rio"));
    }
    else if (user instanceof User) {
        console.log("".concat(user.name, " \u00E9 um usu\u00E1rio comum"));
    }
}
userGreeting(p1);
userGreeting(p2);
//in - verifica se existe tal propriedade no obj
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var bel = new Dog("Bel");
var aries = new Dog("Aries", "Rottweiler");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log("".concat(dog.name, " pertence a ra\u00E7a ").concat(dog.breed));
    }
    else {
        console.log(" o cachorro n\u00E3o possui ra\u00E7a definida (SRD)");
    }
}
showDogDetails(bel);
showDogDetails(aries);
//ex3
function review(name, stars) {
    if (typeof stars === 'boolean') {
        console.log("".concat(name, " n\u00E3o avaliou o filme, descri\u00E7\u00E3o n\u00E3o informada"));
        return;
    }
    return console.log("".concat(name, " avaliou o filme em ").concat(stars, " estrelas e deixou uma review"));
}
review("Jonas", 5);
review("Pedro", false);
