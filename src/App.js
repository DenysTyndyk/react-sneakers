
function App() {
  return (
    <div className="Wrapper clear">
     <header className="d-flex justify-between align-center p-40" >
      <div className="d-flex align-center">
      <img width={40} height={40} src="/image/logo.png"/>
      <div className="HeaderInfo">
        <h3 className="text-uppercase">REACT SNEAKERS</h3>
        <p className="opacity-5">Shop with the beast sneakers</p>
      </div>
      </div>
    <ul className="HeaderRight d-flex">
      <li className="mr-30">
      <img width={18} height={18} src="/image/cart.svg"/>
      <span>100 USDT</span>
      </li>
      <li>
      <img width={18} height={18} src="/image/User.svg"/>
      </li>
    </ul>
     </header>
     <div className="Content p-40">
      <h1 className="mb-40">All sneakers</h1>
      
      <div className="d-flex">
      <div className="Card">
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
