//Generics - usamos quando a função pode aceitar mais de um tipo
function showData(arg) {
    return "O dado \u00E9: ".concat(arg);
}
console.log(showData(5)); //exibe pois transforma o dado em ums string, a partir do generic
console.log("Testando generic");
console.log(false);
console.log([], {});
console.log(["uva", "abacate", 2]);
//reduzindo os tipos de dados aceitos com constraincts
function showProductName(obj) {
    return "O nome do produto \u00E9 ".concat(obj.name);
}
var myObj = { name: "Porta", cor: "Branca" };
var otherProduct = { name: "Carro", wheels: 4 };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
var myCar = {
    name: "audi",
    wheels: 4,
    engine: 4.0,
    color: "Nardo gray",
};
var myPen = {
    name: "Caneta bic",
    wheels: false,
    engine: false,
    color: "Azul",
};
console.log(myCar);
console.log(myPen);
//type parameters - diz que algum parametro de alguma função pe a chave de um obj
function getSomeKey(obj, key) {
    return "A chave ".concat(String(key), " est\u00E1 presente no obj e tem o valor ").concat(obj[key]);
}
var server = {
    hd: "Toshiba 1 TB",
    ram: "KINGSTON 12GB",
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, name) {
    return "".concat(obj[name]);
}
var myChar = {
    name: "Pedro",
    age: 19,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, "name"));
//typeof type operator - podemos criar um novo tipo baseado em um tipo de algum dado
var userName = "Pedro";
var userName2 = "João"; // tipa com base da variavel acima
var userName3 = "Daniel";
var userName4 = "Adair"; //implementando
var newTruck = {
    km: 190000,
    kg: 20000,
    description: "Bitruck",
};
function showKm(desc, km) {
    console.log("o ve\u00EDculo ".concat(desc, " tem a KM de ").concat(km));
}
showKm(newTruck.description, newTruck.km);
var newCar = {
    km: 3000,
    kg: 1220,
    description: "sedan",
};
showKm(newCar.description, newCar.km); //podemos usar em objetos com chaves semelhantes
var someVar = 5;
var testing = "some text";
var a4 = "Testando"; //a4 tem os valores do tipo a3
var a5 = "union"; //a5 tem os valores do tipo a3
