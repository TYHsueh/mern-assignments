import './App.css';
import {useState} from 'react';
import ProductForm from './components/ProductForm';
import DisplayProduct from './components/DisplayProduct';
import OneProduct from './components/OneProduct';
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';

function App() {
  const [productList, setProductList]=useState([]);
  
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><ProductForm productList={productList} setProductList={setProductList} /> <DisplayProduct productList={productList} setProductList={setProductList} /> </>}/>
          {/*within element, wrap multiple components with <></> to display in the same path
          or we can create a "views" folder with js file including mutiple components in the same file and display that js file inside elemnet tag */}
          <Route path='/viewProduct/:id' element={<OneProduct />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
