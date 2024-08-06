import './App.css';
import AppRouter from "./routing/routes";

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { productsData } from './features/Dashboard/Browse/data';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from './redux/slices/productSlice';
//import { productsData } from '../data'


function App() {

  const dispatch = useDispatch();

  

  useEffect(() => {

    const fetchProducts = () => {
      dispatch(fetchProductsStart());
      try {
        //api call
        const data = productsData;
        console.log("data: products ", data)
        dispatch(fetchProductsSuccess(data));
      } catch (error) {
        console.log("data: products error ", error)
        dispatch(fetchProductsFailure());
      }
    }

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
