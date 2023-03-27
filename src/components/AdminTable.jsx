import { FaRegEdit, FaTrash, FaUserAlt } from 'react-icons/fa'

function AdminTable({admins, editButton, deleteButton}) {
    return(
        <table>
            <thead>
                <tr>
                    <th rowSpan={2}>Id</th>
                    <th rowSpan={2}>Nombre</th>
                    <th rowSpan={2}>Usuario</th>
                    <th rowSpan={2}>Email</th>
                    <th colSpan={3}>Dirección</th>
                    <th rowSpan={2}>Operaciones</th>
                </tr>

                <tr>
                    <th>Calle</th>
                    <th>Número</th>
                    <th>Comunidad</th>
                </tr>
            </thead>

            <tbody>
                {
                    admins.map((admin,index) => {
                        return (
                            <tr key={index}>
                                <td>{admin._id}</td>
                                <td>{admin.name}</td>
                                <td>{admin.username}</td>
                                <td>{admin.email}</td>
                                <td>{admin.address.street}</td>
                                <td>{admin.address.number}</td>
                                <td>{admin.address.place}</td>
                                <td>
                                    <div className="btn-td">
                                        <button
                                            className='btn-p btn-edit'
                                            onClick={() => editButton(admin._id)}
                                        >
                                            <FaRegEdit />
                                            Editar
                                        </button>

                                        <button
                                            className='btn-p btn-delete'
                                            onClick={() => deleteButton(admin._id)}
                                        >
                                            <FaTrash />
                                            Borrar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default AdminTable;