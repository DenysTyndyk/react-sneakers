import styles from "./Drawer.module.scss";

function Drawer({onClose,items = []}) {
    return (
        <div className={styles.Overlay}>
    <div className={styles.Drawer}>
        <h2 className=" d-flex justify-between mb-30 ">Cart <img onClick={onClose}  className="RemoveBtn cu-p"
                                                                 src="/image/btn-remove.svg" alt="Remove"/></h2>

        <div className={styles.Items}>
            {items.map((obj)=>(
            <div className={styles.CartItem}>
                <div style={{ backgroundImage: `url(${obj.imgUrl})` }}
                     className={styles.CartItemImg}></div>
                <div className="mr-20 flex">
                    <p className="mb-5">{obj.description}</p>
                    <b>{obj.price} USDT</b>
                </div>
                <img className={styles.RemoveBtn} src="/image/btn-remove.svg" alt="Remove"/>
            </div>
        ))}

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