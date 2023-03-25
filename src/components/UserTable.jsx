import { FaRegEdit, FaTrash } from 'react-icons/fa'

function UserTable({users, editButton, deleteButton}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Operations</th>
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
                            <td>{user.password}</td>
                            <td>
                                <div className='btn-td'>
                                    <button
                                        className='btn-p btn-profile'
                                    >
                                        <FaRegEdit />
                                        Profile
                                    </button>
                                    <button
                                        className='btn-p btn-edit'
                                        onClick={() => editButton(user._id)}
                                    >
                                        <FaRegEdit />
                                        Edit
                                    </button>

                                    <button
                                        className='btn-p btn-delete'
                                    >
                                        <FaTrash />
                                        Delete
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