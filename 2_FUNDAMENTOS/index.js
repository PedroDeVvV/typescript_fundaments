var arg = 10.3623;
console.log(arg.toPrecision(4));
//annotation - definimos o tipo
var ann = "Pedro";
//inference - typescript identifica o tipo
var inn = 5;
// inn = "p" Causa um erro ao tentar mudar o dado para um outro tipo
//ex2
var var1 = 80;
var varString = var1.toString();
console.log("".concat(varString, " \u00E9 ").concat(typeof varString));
