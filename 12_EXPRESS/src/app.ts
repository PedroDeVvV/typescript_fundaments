//Iniciando projeto
// console.log("Hello world");
import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

//Rota com POST
app.use(express.json()); //habilitando middleware para leitura de dados no body

app.post("/api/product", (req, res) => {
  console.log(req.body);
  return res.send(
    `Produto ${req.body.name} adicionado, seu preço é de R$${req.body.price}`
  );
});

//middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);

//4- rota para qualquer verbo
app.all("/api/product/check", (req, res) => {
  console.log(req.body);
  return res.send(
    `Produto ${req.body.name} adicionado, seu preço é de R$${req.body.price}`
  );
});

//interfaces do express
app.get("/api/interface", (req: Request, res: Response) => {
  return res.send("Utilizamos as interfaces");
});

//enviando json
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Shirt",
    price: 30,
    color: "Blue",
    size: ["P", "M", "G"],
  });
});

//router params
app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);
  return res.send("Produto não encontrado");
});

//rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
  console.log(req.params);
  return res.send(
    `Acessando a review ${req.params.reviewId} do produto ${req.params.id}`
  );
});

// router handler

function getUser(req: Request, res: Response) {
  console.log("Resgatando o usuário com o id: ", req.params.id);
  return res.send("usuário encontrado");
}

app.get("/api/user/:id", getUser);

//middleware

function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("Pode seguir");
    next();
  } else {
    console.log("Acesso restrito");
  }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.send("Bem vindo a área administrativa");
});

//generics
app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log("ID: ", req.params.id);
    return res.json({ status: true });
  }
);

app.listen(3000, () => {
  console.log("Aplicação rodando na porta 3000");
});
