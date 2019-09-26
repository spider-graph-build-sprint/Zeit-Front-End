import React, { useState } from 'react'

const User = props => {

    const { label } = props.user
    const [editing, setEditing] = useState(false)

    const [editedUser, setEditedUser] = useState({ label })

    function handleChanges(e) {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value })
    }

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.updateUser(editedUser)
                setEditing(!editing)
            }}>
                {editing ?
                    <input type="text" name='label' value={editedUser.name} onChange={handleChanges} />
                    :
                    <h1>{name}</h1>}
                <button style={{ display: editing ? 'block' : 'none' }}>Updatenate</button>
            </form>

            <button
                onClick={() => {
                    props.delUser(id)
                    setEditing(!editing)
                }}
                style={{ display: editing ? 'block' : 'none' }}
            >Removenateinator</button>
            <button
                onClick={() => setEditing(!editing)}
                style={{ display: editing ? 'none' : 'block' }}
            >Edify</button>

        </>

    )
}

export default User