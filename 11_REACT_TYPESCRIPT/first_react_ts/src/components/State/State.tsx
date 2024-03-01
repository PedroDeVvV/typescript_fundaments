import {useState, ChangeEvent} from 'react'
//precisamos tipar o event como o changeEvent e passar um decorator informando a ação

const State = () => {

    const [text, setText] = useState<string | null>("Testando o hook")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

  return (
    <div>
        <p>O texto é: {text}</p>
        <button onClick={() => setText("Texto padrão")}>Alterar texto</button>
        <input type="text" onChange={handleChange} value={text ?? ''}/>
    </div>
  )
}

export default State