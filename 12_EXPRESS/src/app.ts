//Iniciando projeto
// console.log("Hello world");
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

//Rota com POST
app.use(express.json()); //habilitando middleware para leitura de dados no body

app.post("/api/product", (req, res) => {
  console.log(req.body);
  return res.send(`Produto ${req.body.name} adicionado, seu preço é de R$${req.body.price}`);
});

//4- rota para qualquer verbo
app.all('/api/product/check', (req,res) => {
    console.log(req.body)
    return res.send(`Produto ${req.body.name} adicionado, seu preço é de R$${req.body.price}`)
})

app.listen(3000, () => {
  console.log("Aplicação rodando na porta 3000");
});
