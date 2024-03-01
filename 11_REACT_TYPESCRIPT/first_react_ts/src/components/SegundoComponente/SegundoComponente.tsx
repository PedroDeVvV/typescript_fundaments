interface Props {
  name: string;
}

const SegundoComponente = (props: Props) => {
  return (
    <div>
      <p>Carro: {props.name}</p>
    </div>
  );
};

export default SegundoComponente;
