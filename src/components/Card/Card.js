import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader"
import React from "react";
import AppContext from "../../context";
function Card({id,description,imgUrl,price, onPlus,added = false,loading = false}) {

    const {isItemAdded} = React.useContext(AppContext);
    const [isFavorite,setFavorite] = React.useState(false);
    const obj ={id,parentId: id ,description,imgUrl,price}


    const onClickPlus = ()=>{
        onPlus(obj);
    }
    const onClickFavirite= ()=>{
        setFavorite(!isFavorite);
    }


        return (
        <div className={styles.Card}>
            {
                loading ?
                    <ContentLoader
                        speed={2}
                        width={150}
                        height={187}
                        viewBox="0 0 150 187"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb">
                        <rect x="130" y="62" rx="0" ry="0" width="0" height="1"/>
                        <rect x="0" y="0" rx="10" ry="10" width="150" height="91"/>
                        <rect x="0" y="104" rx="5" ry="5" width="150" height="15"/>
                        <rect x="0" y="125" rx="5" ry="5" width="100" height="15"/>
                        <rect x="2" y="160" rx="5" ry="5" width="80" height="24"/>
                        <rect x="118" y="152" rx="10" ry="10" width="32" height="32"/>
                    </ContentLoader> : <> <div className={styles.Favorite} onClick={onClickFavirite}>
                        <img src={isFavorite ? '/image/heart-liked.svg' : '/image/heart-unliked.svg'} alt="Unliked"/>
                    </div>
                <img width={133} height={112} src={imgUrl} alt="Sneakers"/>
    <h5>{description}</h5>
    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
            <span>Price:</span>
            <b>{price} USDT</b>
        </div>
        <img className={styles.plus} onClick={onClickPlus}
             src={isItemAdded(id) ? 'image/btn-checked.svg' : 'image/btn-plus.svg'} alt="Plus"/>
    </div> </>
}

</div>
)
    ;
}


export default Card;