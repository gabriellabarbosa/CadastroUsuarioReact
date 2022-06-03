import {useState} from 'react'

export default function StateColor (props){

    const [color, setColor] = useState("vermelho")

    return(
        <div>
            <p> Minha cor favorita é: {color}</p>
            <button type="button" onClick={
                () => setColor(props.color)
            }>Alterar Cor</button>
        </div>
    )
}