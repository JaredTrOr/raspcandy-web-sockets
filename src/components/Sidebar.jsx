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
                        Ver usuarios
                    </Link>
                </li>
                <li className='item'>
                    <Link className='item-link' to='/administrators'>
                        <FaPencilAlt/>
                        Ver administradores
                    </Link>
                </li>
                <li className='item'>
                    <Link className='item-link' to='/purchases'>
                        <FaShoppingBag/>
                        Ver compras
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;