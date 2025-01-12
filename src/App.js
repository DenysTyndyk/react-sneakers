import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from "./components/Drawer/Drawer";
import React from "react";

function App() {
    const [items,setItems] = React.useState([]);
    const [cartitems,setCartItems] = React.useState([]);
    const [cartOpened,setCartOpened] = React.useState(false);

    React.useEffect(()=>{ //глянути відео
    fetch('https://678270e6c51d092c3dcf8223.mockapi.io/items').then((response)=> {
        return response.json();
    }).then(json=> {
        setItems(json);
    });
    },[])

    const onAddToCart = (obj) => {
        setCartItems(prev=>[...prev,obj]);
    };

  return (
    <div className="Wrapper clear">
        {cartOpened && <Drawer items = {cartitems} onClose={()=>setCartOpened(false)}/> }
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="Content p-40">
        <div className="d-flex justify-between align-center mb-40">
      <h1>All sneakers</h1>
      <div className="Search-block d-flex">
      <img src="/image/serchicon.svg" alt="Search"/>
      <input placeholder="Search..."/>
      </div>
      </div>
      
      <div className="d-flex flex-wrap ">
          {
              items.map((item) => (<Card description={item.description}
                                   price={item.price}
                                   imgUrl={item.img}
                                   onFavorite={()=>console.log("Click on Favorite")}
                                   onPlus={(obj)=> onAddToCart(obj)} />
              ))
          }
      </div>
     </div>
    </div>
  );
}

export default App;
