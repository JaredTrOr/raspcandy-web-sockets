import {Link} from 'react-router-dom'
import { FaUser, FaPencilAlt, FaShoppingBag } from 'react-icons/fa'
import logo from '../images/title_logo.png';
import dispenser from '../images/dispenser.png';


function Sidebar(){
    return (
        <div className="sidebar">
            <img src={logo} alt="" />
            <img src={dispenser} alt="" />
            <ul className='item-list'>
                <li className='item'>
                    <Link className='item-link' to='/'>
                        <FaUser/>
                        Manage users
                    </Link>
                </li>
                <li className='item'>
                    <Link className='item-link' to='/createUser'>
                        <FaPencilAlt/>
                        Manage administrators
                    </Link>
                </li>
                <li className='item'>
                    <Link className='item-link' to='/createUser'>
                        <FaShoppingBag/>
                        Manage purchases
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;