import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';




function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Header />} /> */}
        <Route path='/' element={<ProductListing />} />
        <Route path='/product/:productId' element={<ProductDetail />} />
        <Route>404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
