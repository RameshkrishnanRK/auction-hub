import "./App.css";
import AppRouter from "./routing/routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productsData } from "./jsonData";
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "./redux/slices/productSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = () => {
      dispatch(fetchProductsStart());
      try {
        //api call
        const data = productsData;
        dispatch(fetchProductsSuccess(data));
      } catch (error) {
        dispatch(fetchProductsFailure());
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
