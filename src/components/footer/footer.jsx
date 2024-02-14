import Logo from '../logo/logo';
import './footer.scss'
import telegram from './../../image/telegram.svg'
import whatsapp from './../../image/whatsapp.svg'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="left">
                    <Logo />
                    <p>
                        ИП Степинас Кристина Сергеевна <br />
                        ОГРНИП 323784700402131 <br />
                        ИНН 784000673123 <br />
                    </p>
                    <div className="social">
                        <img src={whatsapp} alt="" />
                        <img src={telegram} alt="" />
                    </div>
                </div>

                <div className="center">
                    <ul>
                        <li className='title'>Навигация</li>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">О бренде</a></li>
                        <li><a href="#">Каталог</a></li>
                        <li><a href="#">Campagin</a></li>
                        <li><a href="#">Доставка и оплата</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">История великих</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </div>

                <div className="right">
                    <ul>
                        <li className='title'>Документы</li>
                        <li><a href="#">Политика конфеденциальности</a></li>
                        <li><a href="#">Договор оферты</a></li>
                    </ul>

                    <ul>
                        <li className='title'>Контакты</li>
                        <li><a href="#">89054892343</a></li>
                        <li><a href="#">store@stepinas.ru</a></li>
                    </ul>

                    

                </div>
            </div>
        </footer>
    );
}

export default Footer;