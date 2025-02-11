import React from "react";
import styles from "./Drawer/Drawer.module.scss";
import AppContext from "../context";

const Info = ({image,title,description}) =>{

    const {setCartOpened} = React.useContext(AppContext);

    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px"  src={image} alt="Cart Empty"/>
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button onClick={() => setCartOpened(false)} className={styles.GreenButton2}>
                <img src="image/Arow2.svg" alt="Arow"/>
                Go back
            </button>
        </div>
    )
}

export default Info;