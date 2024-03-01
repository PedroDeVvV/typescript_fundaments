import "./App.css";
//importando componentes
import FirstComponent from "./components/ComponenteTeste/Componente";
import SegundoComponente from "./components/SegundoComponente/SegundoComponente";
import Livro, { Gender } from "./components/Livro/Livro";
import State from "./components/State/State";

// Type
type textOrNull = string | null;

function App() {
  //1-VARIAVEIS
  const name: string = "Pedro";
  const age: number = 19;
  const isWorking: boolean = true;
  const hadAPet: boolean = true;

  //2- funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  //type
  const myText: textOrNull = "Tem um texto aqui";
  let mySecondText: textOrNull = null;

  mySecondText = "Opa";

  return (
    <>
      <h1>Hello World React + TypeScript</h1>
      <p>
        {name} tem {age} anos
      </p>
      <p>Está trabalhando ? {!isWorking ? "Não" : "Sim"}</p>
      {!hadAPet ? "" : <p>{name} tem um animal de estimação</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent name={"Pedro"} />
      <SegundoComponente name="Virtus" />
      <Livro
        name="Star Wars"
        gender={Gender.F}
        creator="George Lucas"
        pages={360}
      />
      <p>----------------------- useState ----------------</p>
      <State />
    </>
  );
}

export default App;
