import { FaRegEdit, FaTrash, FaUserAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function UserTable({users, editButton, deleteButton, profileButton}) {
    const navigate = useNavigate();

    const handleOnProfileButton = (id) => {
        profileButton(id);
        navigate(`/userProfile/${id}`);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Email</th>
                    <th>Operaciones</th>
                </tr>
            </thead>

            <tbody>
                {users.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <div className='btn-td'>
                                    <button
                                        className='btn-p btn-profile'
                                        onClick={() => handleOnProfileButton(user._id)}
                                    >
                                        <FaUserAlt />
                                        Perfil
                                    </button>
                                    <button
                                        className='btn-p btn-edit'
                                        onClick={() => editButton(user._id)}
                                    >
                                        <FaRegEdit />
                                        Editar
                                    </button>

                                    <button
                                        className='btn-p btn-delete'
                                        onClick={() => deleteButton(user._id)}
                                    >
                                        <FaTrash />
                                        Borrar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default UserTable;