import styles from "./Card.module.scss";

console.log(styles);

function Card(props){
        return (
        <div className={styles.Card}>
            <div className={styles.Favorite}>
                <img src="/image/heart-unliked.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={props.imgUrl} alt="Sneakers"/>
            <h5>{props.description}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price:</span>
                    <b>{props.price} USDT</b>
                </div>
                <button className="button" onClick={props.onClick}>
                    <img width={11} height={11} src="/image/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    );
}

export default Card;