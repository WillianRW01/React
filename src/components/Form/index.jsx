import { useState } from 'react'
import './styles.css'

export default function Form() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        }
        )
        console.log(name,value)
    }
    return (

        <section>
            <h2>Form simples </h2>
            <div>
                <form action="#">
                    <label for="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" value={formData.nome} onChange={handleChange}/>
                </form>

                <form action="#">
                    <label for="Email">Email:</label>
                    <input type="email" name="Email" id="Email" value={formData.email}onChange={handleChange} />
                </form>

                <form action="#">
                    <label for="Senha">Senha:</label>
                    <input type="password" name="Senha" id="Senha" value={formData.senha}onChange={handleChange} />
                </form>
            </div>
        </section>
    )
}