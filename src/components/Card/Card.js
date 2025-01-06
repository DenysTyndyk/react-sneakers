import styles from "./Card.module.scss";
import React from "react";

function Card(props){

    const [isAdded,setIsAdded] = React.useState(false);
    const onClickPlus = ()=>{
        setIsAdded(!isAdded);
    }

    React.useEffect(()=>{
        console.log("change");
    },[isAdded]);

        return (
        <div className={styles.Card}>
            <div className={styles.Favorite} onClick={props.onFavorite}>
                <img src="/image/heart-unliked.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={props.imgUrl} alt="Sneakers"/>
            <h5>{props.description}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price:</span>
                    <b>{props.price} USDT</b>
                </div>
                    <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/image/btn-checked.svg' : '/image/btn-plus.svg'} alt="Plus"/>
            </div>
        </div>
    );
}

export default Card;