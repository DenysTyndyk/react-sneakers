import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from "./components/Drawer/Drawer";

const arr =[
    {description: "Men's Nike Blazer Mid Suede Sneakers" , price: 100 , img:"/image/img-sneakers/sneakers1.jpg" },
    {description: "Men's Nike Air Max 270 Sneakers" , price: 150 , img:"/image/img-sneakers/sneakers2.jpg"},
    {description: "Men's Nike Blazer Mid Suede Sneakers" , price: 200 , img:"/image/img-sneakers/sneakers4.jpg"},
    {description: "Puma X Aka Boku Future Rider sneakers." , price: 300 , img:"/image/img-sneakers/sneakers3.jpg"},

];

function App() {
  return (
    <div className="Wrapper clear">
        <Drawer />
     <Header/>
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
                                   onClick={()=>console.log(obj)} />
              ))
          }
      </div>
     </div>
    </div>
  );
}

export default App;
