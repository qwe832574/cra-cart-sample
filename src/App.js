import { useReducer } from 'react';
import Naverber from './components/Navber';
import Products from './components/Products';
import Cart from './components/Cart';
import { CartContext, cartInit, cartReducer } from './store';

function App() {
  const reducer = useReducer(cartReducer,cartInit);
  return (
    <CartContext.Provider value={reducer}>
      <Naverber></Naverber>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-7'>
            <Products></Products>
          </div>
          <div className='col-md-5'>
            <Cart></Cart>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}


export default App;

