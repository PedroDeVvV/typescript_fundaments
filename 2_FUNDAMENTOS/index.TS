let arg:number = 10.3623
console.log(arg.toPrecision(4))

//annotation - definimos o tipo
const ann:string = "Pedro";
//inference - typescript identifica o tipo
let inn = 5;
// inn = "p" Causa um erro ao tentar mudar o dado para um outro tipo

//ex2
let var1: number = 80;
let varString = var1.toString()
console.log(`${varString} é ${typeof varString}`)
