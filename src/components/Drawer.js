function Drawer() {
    return (
        <div className="Overlay">
    <div className="Drawer">
        <h2 className=" d-flex justify-between mb-30 ">Cart <img className="RemoveBtn cu-p"
                                                                     src="/image/btn-remove.svg" alt="Remove"/></h2>

            <div className="Items">
                <div className="CartItem d-flex align-center mb-20">
                    <div style={{backgroundImage: 'url(/image/img-sneakers/sneakers2.jpg)'}}
                         className="CartItemImg"></div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Men's Nike Blazer Mid Suede Sneakers</p>
                        <b>2000 USDT</b>
                    </div>
                    <img className="RemoveBtn" src="/image/btn-remove.svg" alt="Remove"/>
                </div>
                <div className="CartItem d-flex align-center mb-20">
                    <div style={{backgroundImage: 'url(/image/img-sneakers/sneakers1.jpg)'}}
                         className="CartItemImg"></div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Men's Nike Blazer Mid Suede Sneakers</p>
                        <b>2000 USDT</b>
                    </div>
                    <img className="RemoveBtn" src="/image/btn-remove.svg" alt="Remove"/>
                </div>
            </div>
            <div className="CartTotalBlock">
                <ul>
                    <li>
                        <span>Total:</span>
                        <div></div>
                        <b>4000 USDT</b>

                    </li>
                    <li>
                        <span>Tax 5%:</span>
                        <div></div>
                        <b> 200 USDT</b>
                    </li>
                </ul>
                <button className="GreenButton">
                    Checkout
                    <img src="/image/Arow.svg" alt="Arrow"/>
                </button>
            </div>
        </div>
        </div>
    );
}
export default Drawer;