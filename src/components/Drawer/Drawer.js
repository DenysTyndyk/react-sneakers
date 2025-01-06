import styles from "./Drawer.module.scss";

function Drawer(props) {
    return (
        <div className={styles.Overlay}>
    <div className={styles.Drawer}>
        <h2 className=" d-flex justify-between mb-30 ">Cart <img onClick={props.onClose}  className="RemoveBtn cu-p"
                                                                 src="/image/btn-remove.svg" alt="Remove"/></h2>

        <div className={styles.Items}>
            <div className={styles.CartItem}>
                <div style={{backgroundImage: 'url(/image/img-sneakers/sneakers2.jpg)'}}
                     className={styles.CartItemImg}></div>
                <div className="mr-20 flex">
                    <p className="mb-5">Men's Nike Blazer Mid Suede Sneakers</p>
                    <b>1000 USDT</b>
                </div>
                <img className={styles.RemoveBtn} src="/image/btn-remove.svg" alt="Remove"/>
            </div>
            <div className={styles.CartItem}>
                <div style={{backgroundImage: 'url(/image/img-sneakers/sneakers2.jpg)'}}
                     className={styles.CartItemImg}></div>
                <div className="mr-20 flex">
                    <p className="mb-5">Men's Nike Blazer Mid Suede Sneakers</p>
                    <b>1000 USDT</b>
                </div>
                <img className={styles.RemoveBtn} src="/image/btn-remove.svg" alt="Remove"/>
            </div>
        </div>
        <div className={styles.CartTotalBlock}>
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
            <button className={styles.GreenButton}>
                Checkout
                    <img src="/image/Arow.svg" alt="Arrow"/>
                </button>
            </div>
        </div>
        </div>
    );
}
export default Drawer;