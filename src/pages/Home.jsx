import Card from "../components/Card/Card";
import React from "react";
import AppContext from "../context";

function Home({items, searchValue, SetSearchValue ,onChangeSearchInput, onAddToCart,isLoading,}){
    const {isItemAdded} = React.useContext(AppContext);
    const RenderItems = () => {
        const filteredItems = items.filter(item => item.description.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return( isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
            <Card
                key={index}
                onPlus={(obj) => onAddToCart(obj)}
                added={isItemAdded(item && item.id)}
                loading = {isLoading}
                {...item}/>
        ))
    }
    return (
        <div className="Content p-40">
            <div className="d-flex justify-between align-center mb-40">
                <h1>{searchValue ? `Search by: "${searchValue}"` : 'All sneakers'}</h1>
                <div className="Search-block d-flex">
                    <img src="image/serchicon.svg" alt="Search"/>
                    {searchValue &&
                        <img onClick={() => SetSearchValue('')} className="clear cu-p" src="image/btn-remove.svg"
                             alt="Remove"/>}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..."/>
                </div>
            </div>
            <div className="d-flex flex-wrap ">
                {
                    RenderItems()
                }
            </div>
        </div>
    )
}

export default Home;