import styles from './Header.module.scss';
import {Link} from "react-router-dom";


function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
                <Link to="/">
            <div className="d-flex align-center">
                <img width={40} height={40} src="image/logo.png" alt="Logo"/>
                <div className="HeaderInfo">
                    <h3 className="text-uppercase">REACT SNEAKERS</h3>
                    <p className="opacity-5">Shop with the beast sneakers</p>
                </div>
            </div>
                    </Link>
            <ul className="HeaderRight d-flex">
                <li className="mr-30 cu-p">
                    <img onClick={props.onClickCart} width={18} height={18} src="image/cart.svg" alt="Cart Card"/>
                    <span >{props.TotalPrice()} USDT</span>
                </li>
                <li className="mr-30 cu-p">
                    <Link to="/fovorites">
                    <img width={18} height={18} src="image/favorit_heart.svg" alt="fovorite"/>
                    </Link>
                </li>
                <li className="mr-30 cu-p">
                    <Link to="/orders">
                    <img width={18} height={18} src="image/User.svg" alt="Userimg"/>
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
