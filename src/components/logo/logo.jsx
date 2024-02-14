import './logo.scss'
import logo from './../../image/logo.svg'

function Logo() {
    return ( 
        <div className="center">
            <img src={logo} alt="" />
            <p>Индивидуальность. Элегантность. Ценность</p>
        </div>
     );
}

export default Logo;