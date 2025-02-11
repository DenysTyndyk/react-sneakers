import styles from "./Drawer.module.scss";
import Info from "../info";
import React from 'react'
import AppContext from "../../context";
function Drawer({onClose,onRemove,items = [],TotalPrice, opened}) {

    const [isOrderComplate,SetOrederComplate] = React.useState(false);
    const {setCartItems} = React.useContext(AppContext);
    const onClickOrder = () =>{
        SetOrederComplate(true);
        setCartItems([]);
    }

    const TaxPrice = () =>{
        return TotalPrice()/100 * 5;
    }
    return (
        <div className={`${styles.Overlay} ${opened ? styles.overplayVisible : ''} `}>
            <div className={styles.Drawer}>
                <h2 className=" d-flex justify-between mb-30 ">Cart <img onClick={onClose} className="RemoveBtn cu-p"
                                                                         src="image/btn-remove.svg" alt="Remove"/></h2>

                {items.length > 0 ?
                    <div className={styles.Items}>
                        {items.map((obj) => (
                            <div key={obj.id} className={styles.CartItem}>
                                <div style={{backgroundImage: `url(${obj.imgUrl})`}}
                                     className={styles.CartItemImg}></div>
                                <div className="mr-20 flex">
                                    <p className="mb-5">{obj.description}</p>
                                    <b>{obj.price} USDT</b>
                                </div>
                                <img onClick={() => onRemove(obj.id)} className={styles.RemoveBtn}
                                     src="image/btn-remove.svg"
                                     alt="Remove"/>
                            </div>
                        ))}
                        <div className={styles.CartTotalBlock}>
                            <ul>
                                <li>
                                    <span>Total:</span>
                                    <div></div>
                                    <b>{TotalPrice()} USDT</b>
                                </li>
                                <li>
                                    <span>Tax 5%:</span>
                                    <div></div>
                                    <b> {TaxPrice()} USDT</b>
                                </li>
                            </ul>
                            <button onClick={onClickOrder} className={styles.GreenButton}>
                                Checkout
                                <img src="image/Arow.svg" alt="Arrow"/>
                            </button>
                        </div>

                    </div> : (
                        <Info title={isOrderComplate ? " Order completed" : "Cart empty"}
                              description={isOrderComplate ? "Your order #18 will be transferred to courier delivery soon" : "Add a pair of sneakers to complete the order"}
                              image={isOrderComplate ? "image/complite-order.jpg" : "image/empty-cart.jpg"}/>
                    )}
            </div>
        </div>
    );
}

export default Drawer;