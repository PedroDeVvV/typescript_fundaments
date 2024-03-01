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
//campos em classes
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var pedro = new User();
pedro.name = "Pedro";
pedro.age = 19;
// pedro.job = "Programmer" erro
console.log(pedro);
//iniciando com novos valores - constructor
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var joao = new NewUser("João", 22);
var henrique = new NewUser("Henrique", 42);
console.log(joao);
console.log(henrique);
//campos readonly
var Car = /** @class */ (function () {
    function Car(name) {
        this.wheels = 4; //propriedade inicializada com valor default e não é possivel atribuir um novo valor
        this.name = name;
    }
    return Car;
}());
var fusca = new Car("fusca");
console.log(fusca);
console.log((fusca.name = "Fusca turbo"));
// console.log(fusca.wheels = 10); - erro
//herança e super
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    return Machine;
}());
var trator = new Machine("RB 22");
var KillerMachine = /** @class */ (function (_super) {
    __extends(KillerMachine, _super);
    function KillerMachine(name, guns) {
        var _this = _super.call(this, name) || this; // estou recebendo a propriedade de Machine
        _this.guns = guns;
        return _this;
    }
    return KillerMachine;
}(Machine));
var mach1 = new KillerMachine("Mach 3", 2);
console.log(mach1);
//métodos
var Dwarf = /** @class */ (function () {
    function Dwarf(name) {
        this.name = name;
    }
    Dwarf.prototype.greeting = function () {
        console.log("".concat(this.name, ": Hey stranger!"));
    };
    return Dwarf;
}());
var brok = new Dwarf("Brok");
var sindri = new Dwarf("Sindri");
brok.greeting();
sindri.greeting();
//this
var Truck = /** @class */ (function () {
    function Truck(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    Truck.prototype.showDetails = function () {
        console.log("Caminh\u00E3o do modelo ".concat(this.model, " possu\u00ED ").concat(this.hp, "hp"));
    };
    return Truck;
}());
var scania = new Truck("R440", 750);
scania.showDetails();
//getters - maneiras de retornar valores
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            //um getter deve retornar algo
            return console.log("".concat(this.name, " ").concat(this.surname));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return console.log("".concat(this.name));
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p1 = new Person("Pedro", "Henrique");
p1.fullName;
p1.firstName;
//setters
var Coords = /** @class */ (function () {
    function Coords() {
    }
    Object.defineProperty(Coords.prototype, "fillX", {
        set: function (x) {
            if (x === 0) {
                return;
            }
            this.x = x;
            console.log("X inserido com sucesso");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "fillY", {
        set: function (y) {
            if (y === 0) {
                return;
            }
            this.y = y;
            console.log("Y inserido com sucesso");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "getCoords", {
        get: function () {
            return console.log("X: ".concat(this.x, ", Y: ").concat(this.y));
        },
        enumerable: false,
        configurable: true
    });
    return Coords;
}());
var myCoords = new Coords();
myCoords.fillX = 10;
myCoords.fillY = 162;
console.log(myCoords);
myCoords.getCoords;
var blogPost = /** @class */ (function () {
    function blogPost(title) {
        this.title = title;
    }
    blogPost.prototype.itemTitle = function () {
        return "O titulo do post \u00E9 ".concat(this.title);
    };
    return blogPost;
}());
var myPost = new blogPost("Hello world");
console.log(myPost.itemTitle());
var TestingInterface = /** @class */ (function () {
    function TestingInterface(title) {
        this.title = title;
    }
    TestingInterface.prototype.itemTitle = function () {
        return "O titulo \u00E9 ".concat(this.title);
    };
    return TestingInterface;
}());
//override - técnica usada para substituir um método de classe que herdamos
//temos que criar o método com o mesmo nome na classe filha
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.someMethod = function () {
        console.log("Alguma coisa");
    };
    return Base;
}());
var Nova = /** @class */ (function (_super) {
    __extends(Nova, _super);
    function Nova() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nova.prototype.someMethod = function () {
        console.log("Testando outra coisa"); // alterando o método pra classe Nova
    };
    return Nova;
}(Base));
var myObject = new Nova();
var myObj = new Base();
myObject.someMethod(); //Testando outra coisa
myObj.someMethod(); //Alguma Coisa
//modificadores de acesso
//public - por padrão as propriedades são criadas com public
var C = /** @class */ (function () {
    function C() {
        this.x = 10;
    }
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return D;
}(C));
var cInstance = new C();
var dInstance = new D();
console.log(cInstance.x);
console.log(dInstance.x); // vou ter acesso ao x
//protected - usado apenas em subclasses, uma propriedade só pode ser acessada por um método, adiciona uma camada de sgeurança
// ao código
var E = /** @class */ (function () {
    function E() {
        this.x = 10;
    }
    E.prototype.protectedMethod = function () {
        console.log("Esse m\u00E9todo \u00E9 protegido");
    };
    return E;
}());
var F = /** @class */ (function (_super) {
    __extends(F, _super);
    function F() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    F.prototype.showX = function () {
        console.log("X: ".concat(this.x));
        this.protectedMethod(); // aqui eu posso executar o protected méthod
    };
    Object.defineProperty(F.prototype, "alterX", {
        set: function (x) {
            this.x = x;
        },
        enumerable: false,
        configurable: true
    });
    return F;
}(E));
var fInstance = new F();
// console.log(fInstance.x) erro
fInstance.showX();
// fInstance.protectedMethod() erro
fInstance.alterX = 20231; //alterando o valor de uma propriedade protected
fInstance.showX();
//private - métodos só podem ser acessados nas classes em que foram criados e
// ainda sim necessitam de métodos
var PrivateClass = /** @class */ (function () {
    function PrivateClass() {
        this.name = "Private";
    }
    PrivateClass.prototype.showName = function () {
        return this.name;
    };
    PrivateClass.prototype.privateMethod = function () {
        console.log("Método Privado");
    };
    PrivateClass.prototype.showPrivateMethod = function () {
        this.privateMethod();
    };
    return PrivateClass;
}());
var pObj = new PrivateClass();
// console.log(pObj.name) - erro
console.log(pObj.showName()); // forma correta
// pObj.privateMethod() maneira incorreta
pObj.showPrivateMethod();
var TestingPrivate = /** @class */ (function (_super) {
    __extends(TestingPrivate, _super);
    function TestingPrivate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestingPrivate.prototype.myMethod = function () {
        // this.privateMethod impossivel acessar
    };
    return TestingPrivate;
}(PrivateClass));
//static members - podemos criar propriedades estaticos, o acesso njão dependerá de objetos
var StaticMembers = /** @class */ (function () {
    function StaticMembers() {
    }
    StaticMembers.staticMethod = function () {
        console.log("Esse é um método estático");
    };
    StaticMembers.prop = "Teste Static";
    return StaticMembers;
}());
// console.log(StaticMembers.prop); não da pra acessar se não estiver com a flag static
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
//dessa forma podemos acessar métodos de uma classe sem a necessidade de instanciar ela
// ou seja, sem criar um novo objeto
//generic class
var Item = /** @class */ (function () {
    function Item(first, second) {
        this.first = first;
        this.second = second;
    }
    Object.defineProperty(Item.prototype, "showFirst", {
        get: function () {
            return "O first \u00E9: ".concat(this.first);
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
var newItem = new Item("caixa", "surpresa");
console.log(newItem.showFirst);
console.log(typeof newItem.showFirst);
var secondItem = new Item(22, false);
console.log(secondItem);
//parameter properties
var ParameterProperties = /** @class */ (function () {
    function ParameterProperties(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    Object.defineProperty(ParameterProperties.prototype, "showQty", {
        get: function () {
            return "Qtd total: ".concat(this.qty);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParameterProperties.prototype, "showPrice", {
        get: function () {
            return "Qtd total: ".concat(this.price);
        },
        enumerable: false,
        configurable: true
    });
    return ParameterProperties;
}());
var newShirt = new ParameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
//class expressions - criar um classe anônima, iremos colocar a classe em uma varivel
var myClass = /** @class */ (function () {
    function class_1(name) {
        this.name = name;
    }
    return class_1;
}());
var j1 = new myClass("Gustavo");
var j2 = new myClass(2);
console.log(j1.name);
console.log(j2.name);
//classe abstrata - serve de molde para outra classe,
//todos os métodos dela devem ser implementados nas classes que á herdam
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    return AbstractClass;
}());
// const newObj = new AbstractClass() erro
var AbstractExample = /** @class */ (function (_super) {
    __extends(AbstractExample, _super);
    function AbstractExample(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    AbstractExample.prototype.showName = function () {
        console.log("O nome \u00E9 ".concat(this.name));
    };
    return AbstractExample;
}(AbstractClass));
var n1 = new AbstractExample("Jonas");
n1.showName();
//relação entre classes
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
var doguinho = new Cat();
doguinho.name = "Aries";
console.log(doguinho);