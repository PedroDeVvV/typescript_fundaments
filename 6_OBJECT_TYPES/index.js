function showProductDetails(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e seu valor \u00E9 R$").concat(product.price));
    if ("isAvailable" in product) {
        if (product.isAvailable) {
            console.log("O produto ".concat(product.name, " \u00E9 v\u00E1lido"));
        }
        else {
            console.log("Produto ".concat(product.name, " inv\u00E1lido"));
        }
    }
    else {
        console.log("Status do produto ".concat(product.name, " n\u00E3o informado"));
    }
}
var prod1 = {
    name: "Cadeira",
    price: 23.44,
    isAvailable: true,
};
var prod2 = {
    name: "HB20",
    price: 50.352,
};
showProductDetails(prod1);
showProductDetails(prod2);
showProductDetails({ name: "BROS 150", price: 82.48, isAvailable: false });
var fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
fusca.brand = "Volkswagen";
var obj = {
    // x: "teste" erro
    // 12: 312 - erro
    x: 29,
};
obj.y = 15;
console.log(obj);
var pedro = {
    name: "Pedro",
    age: 19,
};
var goku = {
    name: "Goku",
    age: 29,
    superpowers: ["Kamehameha", "voo"],
};
console.log(pedro);
console.log(goku);
var arnold = {
    name: "Arnold S",
    type: "Minigun",
    caliber: 9,
};
console.log(arnold);
//readOnlyArray
var myArray = ["Maçã", "Uva", "Pera"];
// myArray[3] = "Mamão" erro ai tentar adicionar propriedade
console.log(myArray);
myArray.forEach(function (item) {
    console.log("Fruta: " + item);
});
var arr = myArray.map(function (item) {
    //ainda posso posso modificar o array através de métodos
    return "Fruta: ".concat(item);
});
console.log(arr);
var myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArr: fiverNumber = [1,2,3,4,5,6] erro
// const myNumberArr: fiverNumber = [1,2,false,4,5,6] erro
//tupla com readonly
function showNumbers(numbers) {
    // numbers[0] = 10 erro
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
