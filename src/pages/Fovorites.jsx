import React from "react";
import AppContext from "../context";
function Favorites(){
  const {Favorites} = React.useContext(AppContext);
    return (
        <div className="Content p-40">
            <div className="d-flex justify-between align-center mb-40">
                <h1>закладки</h1>
            </div>
            <div className="d-flex flex-wrap ">
               закладки
            </div>
        </div>
    );
}

export default Favorites;