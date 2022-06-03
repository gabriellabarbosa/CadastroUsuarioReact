import React, {useState} from "react";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import UsersTable from "./UsersTable";

const Users = () => {

    const usersData = [
        {id: 1, name: 'Gabi', username: 'Gabi', email: 'gabi@gmail.com'},
        {id: 2, name: 'Maria', username: 'Maria', email: 'maria@gmail.com'},
        {id: 3, name: 'Joana', username: 'Joana', email: 'joana@gmail.com'}
    ]

    const initForm = {id: null, name: '', username: '', email: ''}

    const [users, setUsers] = useState(usersData)
    const [currentUser, setCurrentUser] = useState(initForm)
    const [editing, setEditing] = useState(false)

    const addUser = (user) => {
        user.id = users.length + 1 
        setUsers([...users, user])
    }

    const deleteUser = id => {
        setEditing(false)
        setUsers(users.filter(user => user.id !== id))
    }

    const updateUser = (id, updateUser) => {
        setEditing(false)
        setUsers(users.map(
            user => (user.id === id ? updateUser : user)))
    }

    const editRow = (user) => {
        setEditing(true)
        setCurrentUser({id: user.id, name: user.name, username: user.username, email: user.email})
    }

    return(
        <div>
            <h2 style={{"text-align": "center"}}>Cadastro de Usários</h2>
            <div>
                <div>
                    {
                        editing ? (
                            <div>
                                <h3 style={{"text-align": "center"}}>Editar Usuário</h3>
                                <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                                />
                            </div>
                        ):(
                            <div>
                                <h3 style={{"text-align": "center"}}>Novo Usuário</h3>
                                <AddUserForm addUser={addUser} />
                            </div>
                           
                        )
                    }
                </div>
                <div>
                    <h3 style={{"text-align": "center"}}>Lista de Usuários</h3>
                    <UsersTable
                        users={users}
                        editRow={editRow}
                        deleteUser={deleteUser}
                    />
                </div>
            </div>
        </div>
    )
}

export default Users

