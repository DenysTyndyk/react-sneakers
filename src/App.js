import Header from './components/Header/Header';
import Drawer from "./components/Drawer/Drawer";
import Home from "../src/pages/Home";
import Fovorites from "../src/pages/Fovorites";
import Orders from "../src/pages/Orders";

import {Route,Routes} from "react-router-dom";
import AppContext from "./context";
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
            try{
               const [itemsResponce,cartResponce,] = await Promise.all([axios.get('https://678270e6c51d092c3dcf8223.mockapi.io/items'),axios.get('https://678270e6c51d092c3dcf8223.mockapi.io/cart')]);

            SetLoading(false);
            setItems(itemsResponce.data)
            setCartItems(cartResponce.data);
            }
            catch(err){
                alert(err)
            }
        }
        fetchData();
    },[])

    const onAddToCart = async (obj) => {
        try {
            const FindItem = cartitems.find((item) => item && Number(item.parentId) === Number(obj.id));

            if (FindItem) {
                setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
                await axios.delete(`https://678270e6c51d092c3dcf8223.mockapi.io/cart/${FindItem.id}`);
            } else {
                const newItem = { ...obj, parentId: obj.id };

                setCartItems((prev) => [...prev, newItem]);

                const { data } = await axios.post('https://678270e6c51d092c3dcf8223.mockapi.io/cart', newItem);


                setCartItems((prev) =>
                    prev.map((item) =>
                        item.parentId === data.parentId ? { ...item, id: data.id } : item
                    )
                );
            }
        } catch (error) {
            console.error("Помилка при додаванні в кошик:", error);
        }
    };
    const onRemoveItem = (id) => {
        try{
        axios.delete(`https://678270e6c51d092c3dcf8223.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
        }
        catch(error){
            console.log(error);
        }
    }

    const onChangeSearchInput = (event) => {
        SetSearchValue(event.target.value);
    }

    const TotalPrice = () =>{
        return cartitems.reduce((total,item) => total + Number(item.price),0)
    }

    const isItemAdded = (id) => {
        return cartitems.some((item) => item && Number(item.parentId) === Number(id));
    };

  return (
      <AppContext.Provider value={{cartitems,items,Favorites,isItemAdded,setCartOpened,setCartItems}}>
          <div className="Wrapper clear">

              <Drawer items={cartitems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}
                                     TotalPrice={TotalPrice} opened ={cartOpened}/>
              <Header onClickCart={() => setCartOpened(true)} TotalPrice={TotalPrice}/>
              <Routes>
                  <Route path="" exact
                         element={<Home items={items} searchValue={searchValue} SetSearchValue={SetSearchValue}
                                        onChangeSearchInput={onChangeSearchInput} onAddToCart={onAddToCart}
                                        cartitems={cartitems} isLoading={isLoading} />}/>
                  <Route path="fovorites" exact element={<Fovorites/>}/>
                  <Route path="Orders" exact element={<Orders/>}/>

              </Routes>
          </div>
      </AppContext.Provider>
  );
}

export default App;
