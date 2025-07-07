// import logo from './logo.svg';
import './App.css';
import Login from './auth/Login';
import Signupscreen from './auth/Signupscreen';
import Counter from './Counter';
import ColorSchemesExample from './header';
import Todo from './Todo';
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Product from './pages/Products';
function App() {
  console.log("HI")
  return (
    <div>
      <ColorSchemesExample></ColorSchemesExample>
      <Routes>
        <Route path='/' element = {<Todo></Todo>}></Route>
        <Route path='/counter' element = {<Counter></Counter>}></Route>
        <Route path='/signup' element = {<Signupscreen/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/product' element = {<Product/>}></Route>
        
        

      </Routes>
      <ToastContainer/>
    </div>
  );
}


export default App;
