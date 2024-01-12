import './App.css';
import './index.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Payment from './router/Payment/Payment';
import Favorites from './router/Favorites/Favorites';
import Track from './router/Track/Track';
import Product from './Components/Product/Product';
import Produc from './static/Static'
import SingleRoute from './router/single-route/SingleRoute';
import NotFound from './router/NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />

        <main className='main'>
          <Routes>
            <Route path='product' element={<Product data={Produc} />} />
            <Route path='payment' element={<Payment />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='trak' element={<Track />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/productt/:id' element={<SingleRoute />} />
          </Routes>
        </main>









      </BrowserRouter>

    </div>
  );
}

export default App;
