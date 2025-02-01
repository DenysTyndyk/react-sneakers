import styles from "./Drawer.module.scss";

function Drawer({onClose,onRemove,items = [],TotalPrice}) {


    const TaxPrice = () =>{
        return TotalPrice()/100 * 5;
    }
    return (
        <div className={styles.Overlay}>
    <div className={styles.Drawer}>
        <h2 className=" d-flex justify-between mb-30 ">Cart <img onClick={onClose}  className="RemoveBtn cu-p"
                                                                 src="/image/btn-remove.svg" alt="Remove"/></h2>

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
                        {/*кнопка*/}
                        <img onClick={() => onRemove(obj.id)} className={styles.RemoveBtn} src="/image/btn-remove.svg"
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
                    <button className={styles.GreenButton}>
                        Checkout
                        <img src="/image/Arow.svg" alt="Arrow"/>
                    </button>
                </div>

            </div> : (
                <div class="cartEmpty d-flex align-center justify-center flex-column flex">
                    <img class="mb-20" width="120px" height="120px" src="/image/empty-cart.jpg" alt="Cart Empty"/>
                    <h2>Cart empty</h2>
                    <p class="opacity-6">Add a pair of sneakers to complete the order </p>
                    <button onClick={onClose} className={styles.GreenButton2}>
                        <img src="/image/Arow2.svg" alt="Arow"/>
                        Go back
                    </button>
                </div>
            )
        }

        </div>
        </div>
    );
}
export default Drawer;