import Header from './components/Header/Header';
import Drawer from "./components/Drawer/Drawer";
import Home from "../src/pages/Home";
import Fovorites from "../src/pages/Fovorites";
import {Route,Routes} from "react-router-dom";
import axios from 'axios';
import React from "react";

import styles from "./components/Drawer/Drawer.module.scss";

function App() {
    const [items,setItems] = React.useState([]);
    const [cartitems,setCartItems] = React.useState([]);
    const [Favorites,setFavorites] = React.useState([]);
    const [cartOpened,setCartOpened] = React.useState(false);
    const [isLoading,SetLoading] = React.useState(true);

    const [searchValue,SetSearchValue] = React.useState('');


    React.useEffect(()=>{
        async function fetchData(){
            const itemsResponce = await axios.get('https://678270e6c51d092c3dcf8223.mockapi.io/items');
            const cartResponce = await axios.get('https://678270e6c51d092c3dcf8223.mockapi.io/cart');
            SetLoading(false);
            setItems(itemsResponce.data)
            setCartItems(cartResponce.data);
        }
        fetchData();
    },[])

    const onAddToCart = (obj) => {
        try{
        if(cartitems.find((item) => Number(item.id) === Number(obj.id))){
            axios.delete(`https://678270e6c51d092c3dcf8223.mockapi.io/cart/${obj.id}`);
            setCartItems((prev)=>prev.filter((item) => item.id !== obj.id ));
        }
        else {
            axios.post('https://678270e6c51d092c3dcf8223.mockapi.io/cart', obj )
            setCartItems((prev) => [...prev, obj]);
        }
        }
        catch(error){
          console.log(error);
        }
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://678270e6c51d092c3dcf8223.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    }

    const onChangeSearchInput = (event) => {
        SetSearchValue(event.target.value);
    }

    const TotalPrice = () =>{
        return cartitems.reduce((total,item) => total + Number(item.price),0)
    }

  return (
    <div className="Wrapper clear">
        {cartOpened && <Drawer items = {cartitems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem} TotalPrice={TotalPrice}/>}
        <Header onClickCart={() => setCartOpened(true)} TotalPrice={TotalPrice} />
        <Routes >
            <Route path="/" exact element={<Home items={items} searchValue={searchValue} SetSearchValue={SetSearchValue} onChangeSearchInput={onChangeSearchInput} onAddToCart={onAddToCart} cartitems={cartitems} isLoading={isLoading} />} />
            <Route path="/fovorites" exact element={<Fovorites />} />
        </Routes>
    </div>
  );
}

export default App;
