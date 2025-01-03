
function App() {
  return (
    <div className="Wrapper clear">
      <div className="Overlay">
        <div className="Drawer">
          <h2 className="mb-30">Cart</h2>

          <div className="Items">
          <div className="CartItem d-flex align-center mb-20">
            <div style={{backgroundImage: 'url(/image/img-sneakers/sneakers2.jpg)'}} className="CartItemImg"></div>
            <div className="mr-20 flex">
            <p className="mb-5">Men's Nike Blazer Mid Suede Sneakers</p>
            <b>2000 USDT</b>
            </div>
            <img className="RemoveBtn" src="/image/btn-remove.svg" alt="Remove"/>
          </div>
          <div className="CartItem d-flex align-center mb-20">
            <div style={{backgroundImage: 'url(/image/img-sneakers/sneakers1.jpg)'}} className="CartItemImg"></div>
            <div className="mr-20 flex">
            <p className="mb-5">Men's Nike Blazer Mid Suede Sneakers</p>
            <b>2000 USDT</b>
            </div>
            <img className="RemoveBtn" src="/image/btn-remove.svg" alt="Remove"/>
          </div>
          </div>

          <ul className="CartTotalBlock">
          <li>
            <span>Total:</span>
            <div></div>
            <b>4000 USDT</b>
          </li>
          <li>
          <span>Tax 5%:</span>
            <div></div>
            <b> 200 USDT</b>
          </li>
          </ul>
        </div>
      </div>

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
      <div className="d-flex justify-between align-center mb-40">
      <h1>All sneakers</h1>
      <div className="Search-block d-flex">
      <img src="/image/serchicon.svg" alt="Search"/>
      <input placeholder="Search..."/>
      </div>
      </div>
      
      <div className="d-flex">
      <div className="Card">
        <div className="Favorite">
        <img src="/image/heart-unliked.svg" alt="Unliked"/>
        </div>
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
