function Card(){
    return (
<div className="Card">
    <div className="Favorite">
        <img src="/image/heart-unliked.svg" alt="Unliked"/>
    </div>
    <img width={133} height={112} src="/image/img-sneakers/sneakers1.jpg" alt="Sneakers" />
    <h5>Men's Nike Blazer Mid Suede Sneakers</h5>
    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
            <span>Price:</span>
            <b>2000 USDT</b>
        </div>
        <button className="button">
            <img width={11} height={11} src="/image/plus.svg" alt="Plus"/>
        </button>
    </div>
</div>
    );
}

export default Card;