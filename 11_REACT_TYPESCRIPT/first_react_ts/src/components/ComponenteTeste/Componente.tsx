interface Props {
  name: string
}

const Componente = (props: Props) => {
  return (
    <div>
      Primeiro componente
      <p>O nome por props é: {props.name}</p>
    </div>
  )
}

export default Componente