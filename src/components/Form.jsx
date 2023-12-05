import { useState } from 'react';

const Form = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        colorePreferito: '',
        sesso: 'M',
    })

    const [isFormComplete, setIsFormComplete] = useState(false)

    return (
        <div>
            <p>
                EMAIL
                <input type="email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            email: e.target.value
                        })
                    } />
            </p>

            <p>
                PASSWORD
                <input type="password"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            password: e.target.value
                        })
                    }

                />
            </p>
            <p>
                COLORE PREFERITO
                <select name="Colore preferito"
                    value={formData.colorePreferito}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            colorePreferito: e.target.value
                        })
                    }}
                >
                    <option value="rosso">Rosso</option>
                    <option value="blu">Blu</option>
                    <option value="verde">Verde</option>
                </select>
            </p>
            <p>
                COSA SEI?
                <label>
                    M
                    <input type="radio" value='maschio' name='sesso'
                        checked={formData.sesso === 'M'}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                sesso: e.target.checked ? 'M' : 'F'

                            });
                        }}
                    />
                </label>
                <label>
                    F
                    <input type="radio" value='femmina' name='sesso'
                        checked={formData.sesso === 'F'}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                sesso: e.target.checked ? 'F' : 'M'
                            });
                        }}
                    />
                </label>
            </p>
            <button onClick={() => {
                setIsFormComplete(true);
                console.log(formData)
            }}
            >Registrati</button>
            {isFormComplete && <p>Bravo, sei registrato.</p>}

        </div>
    )
}

export default Form;