import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SingUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login  from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProuct';

function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
      <Nav />
      <Routes>
          <Route element={<PrivateComponent />}>
          <Route path='/' element={<ProductList />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/update/:id' element={<UpdateProduct />} />
          <Route path='/logout' element={<h1>Logout Component</h1>} />
          <Route path='/profile' element={<h1>Profile</h1>} />
          </Route>

          <Route path='/signup' element = {<SingUp/>} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;