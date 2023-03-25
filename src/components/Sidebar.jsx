import {Link} from 'react-router-dom'

function Sidebar(){
    return (
        <div className="sidebar">
            <ul>
                <li><Link to='/'>Manage users</Link></li>
                <li><Link to='/createUser'>Manage administrators</Link></li>
                <li><Link to='/createUser'>Manage purchases</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;