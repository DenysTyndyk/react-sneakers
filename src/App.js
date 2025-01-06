import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from "./components/Drawer/Drawer";
import React from "react";
const arr =[
    {description: "Men's Nike Blazer Mid Suede Sneakers" , price: 100 , img:"/image/img-sneakers/sneakers1.jpg" },
    {description: "Men's Nike Air Max 270 Sneakers" , price: 150 , img:"/image/img-sneakers/sneakers2.jpg"},
    {description: "Men's Nike Blazer Mid Suede Sneakers" , price: 200 , img:"/image/img-sneakers/sneakers4.jpg"},
    {description: "Puma X Aka Boku Future Rider sneakers." , price: 300 , img:"/image/img-sneakers/sneakers3.jpg"},
];

function App() {

    const [cartOpened,setCartOpened] = React.useState(false);

  return (
    <div className="Wrapper clear">
        {cartOpened && <Drawer onClose={()=>setCartOpened(false)}/> }
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="Content p-40">
        <div className="d-flex justify-between align-center mb-40">
      <h1>All sneakers</h1>
      <div className="Search-block d-flex">
      <img src="/image/serchicon.svg" alt="Search"/>
      <input placeholder="Search..."/>
      </div>
      </div>
      
      <div className="d-flex">
          {
              arr.map((obj) => (<Card description={obj.description}
                                   price={obj.price}
                                   imgUrl={obj.img}
                                   onFavorite={()=>console.log("Click on Favorite")}
                                   onPlus={()=>console.log("Click on Add")} />
              ))
          }
      </div>
     </div>
    </div>
  );
}

export default App;
