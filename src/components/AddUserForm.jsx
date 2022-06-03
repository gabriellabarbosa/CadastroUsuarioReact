import React, {useState} from "react";
import styled from 'styled-components'
import styles from './styles_module.css'

const addButton = {
    backgroundColor: 'lightgreen'
}

function AddUserForm(props) {

    const initForm = {id: null, name: null, username: null, email: null}
    const [user, setUser] = useState(initForm)

    const handleInputChange = (event) => {

        const {name, value} = event.target
        setUser({...user, [name]: value})
    }

    return(
        <form style={{display: "flex",
        flexDirection: "column"}} 
        onSubmit={(event) => {
            event.preventDefault()

            if (!user.name || !user.email || !user.username) {
                return
            }

            props.AddUser(user)
            setUser(initForm)
        }}>
            <label className={styles.label}>Nome</label>
            <input type= "text" name="name" value={user.name} onChange={handleInputChange} placeholder="Nome do Usuário" />
            <label className={styles.label}>Username</label>
            <input type= "text" name="username" value={user.username} onChange={handleInputChange} placeholder="Nickname do Usuário" />
            <label className={styles.label}>E-mail</label>
            <input type= "email" name="email" value={user.email} onChange={handleInputChange} placeholder="E-mail do Usuário" />

            <button style={addButton}>Registrar</button>
        </form>
    )
}

export default AddUserForm