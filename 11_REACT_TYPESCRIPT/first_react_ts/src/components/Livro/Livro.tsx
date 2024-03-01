interface Props {
  name: string;
  creator: string;
  pages: number;
  gender: Gender;
}

export enum Gender {
  F = "Fantasia",
  A = "Aventura",
}

const Livro = ({ name, gender, creator, pages }: Props) => {
  //destructuring
  return (
    <div>
      <p>Nome: {name}</p>
      <p>Gênero: {gender}</p>
      <p>Criador: {creator}</p>
      <p>Número de páginas: {pages}</p>
    </div>
  );
};

export default Livro;
