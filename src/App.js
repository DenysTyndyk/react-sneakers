import Card from './components/Card';
import Header from './components/Header';
import Drawer from "./components/Drawer";
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
        <Card/>
      <div className="Card">
      <img width={133} height={112} src="/image/img-sneakers/sneakers2.jpg" alt="Sneakers" />
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
      <div className="Card">
      <img width={133} height={112} src="/image/img-sneakers/sneakers3.jpg" alt="Sneakers" />
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
      <div className="Card">
      <img width={133} height={112} src="/image/img-sneakers/sneakers4.jpg" alt="Sneakers" />
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
      </div>
     </div>
    </div>
  );
}

export default App;
