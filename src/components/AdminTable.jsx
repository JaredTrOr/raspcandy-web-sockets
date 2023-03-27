import { FaRegEdit, FaTrash, FaUserAlt } from 'react-icons/fa'

function AdminTable({admins}) {
    return(
        <table>
            <thead>
                <tr>
                    <th rowSpan={2}>Id</th>
                    <th rowSpan={2}>Name</th>
                    <th rowSpan={2}>Username</th>
                    <th rowSpan={2}>Email</th>
                    <th colSpan={3}>Address</th>
                    <th rowSpan={2}>Operations</th>
                </tr>

                <tr>
                    <th>Street</th>
                    <th>Number</th>
                    <th>Place</th>
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
                    })
                }
            </tbody>
        </table>
    );
}

export default AdminTable;