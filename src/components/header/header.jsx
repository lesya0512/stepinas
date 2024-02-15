import search from './../../image/search2.svg'
import shoppingbag from './../../image/shoppingbag2.svg'
import heart from './../../image/heart2.svg'
import './header.scss'
import Logo from '../logo/logo';

import { NavLink } from "react-router-dom";

function Header() {
    return ( 
        <header>
            <div className="container">
                <div className="left">
                    <a href="#">
                        <img src={search} alt="search" />
                    </a>
                    <a href="#">
                        <img src={shoppingbag} alt="search" />
                    </a>
                    <a href="#">
                        <img src={heart} alt="search" />
                    </a>
                </div>

                <Logo />


                <div className="right">
                    <button><NavLink to={'/catalog'}>Каталог</NavLink></button>
                    <button><NavLink to={'/'}>Войти</NavLink></button>
                </div>
            </div>
        </header>
     );
}

export default Header;