import styles from "./Card.module.scss";
import React from "react";

function Card({description,imgUrl,price,onFavorite, onPlus}) {

    const [isAdded,setIsAdded] = React.useState(false);
    const onClickPlus = ()=>{
        onPlus({description,imgUrl,price});
        setIsAdded(!isAdded);
    }

    React.useEffect(()=>{
        console.log("change");
    },[isAdded]);

        return (
        <div className={styles.Card}>
            <div className={styles.Favorite} onClick={onFavorite}>
                <img src="/image/heart-unliked.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={imgUrl} alt="Sneakers"/>
            <h5>{description}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price:</span>
                    <b>{price} USDT</b>
                </div>
                    <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/image/btn-checked.svg' : '/image/btn-plus.svg'} alt="Plus"/>
            </div>
        </div>
    );
}

export default Card;