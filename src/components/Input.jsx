import { useState } from 'react'

const Input = () => {

    const [userName, setUsername] = useState('');
    const [isP, setIsP] = useState(false);
    const [value, setValue] = useState('')

    return (

        <div>
            <h1>Inserisci il tuo nome</h1>
            <input type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                onClick={() => {
                    setIsP(true);
                    setUsername(value);
                    setValue('');
                }}>
                Invia

            </button>

            {isP && <p> Saluti da {userName} </p>}
        </div>
    );

}
export default Input;