function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/image/logo.png" alt="Logo"/>
                <div className="HeaderInfo">
                    <h3 className="text-uppercase">REACT SNEAKERS</h3>
                    <p className="opacity-5">Shop with the beast sneakers</p>
                </div>
            </div>
            <ul className="HeaderRight d-flex">
                <li className="mr-30">
                    <img width={18} height={18} src="/image/cart.svg" alt="Cart Card"/>
                    <span>100 USDT</span>
                </li>
                <li>
                    <img width={18} height={18} src="/image/User.svg" alt="Userimg"/>
                </li>
            </ul>
        </header>
    );
}

export default Header;