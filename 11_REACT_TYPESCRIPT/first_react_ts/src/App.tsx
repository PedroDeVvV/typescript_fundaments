import "./App.css";

function App() {
  //1-VARIAVEIS
  const name: string = "Pedro";
  const age: number = 19;
  const isWorking: boolean = true;
  const hadAPet: boolean = true;

  //2- funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`
  }

  return (
    <>
      <h1>Hello World React + TypeScript</h1>
      <p>
        {name} tem {age} anos
      </p>
      <p>Está trabalhando ? {!isWorking ? "Não" : "Sim"}</p>
      {!hadAPet ? "" : <p>{name} tem um animal de estimação</p>}
      <h3>{userGreeting(name)}</h3>
    </>
  );
}

export default App;
