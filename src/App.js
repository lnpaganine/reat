import Header from './components/Header';
import { Home } from './components/Home';
import Basket from './components/Basket';
import {useState, useEffect} from "react";  

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [foods, setFoods] = useState([]);
   
  const handleAdd = (food) => {
    const found = cartItems.find((x) => x.id === food.id);
    if (found) {
      setCartItems(cartItems.map((x) =>
       x.id === food.id ? {...found, qty:found.qty+1} : x
      ));
    } else {
      setCartItems([...cartItems, {...food, qty:1}])
    }
  };
  const handleRemove = (food) => {
    const found = cartItems.find((x) => x.id === food.id);
    if (found.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) => 
        x.id === food.id ? {...found, qty: found.qty-1} : x
      ))
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("listOfSelectedFoods");
      setCartItems(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("listOfSelectedFoods", JSON.stringify(cartItems));
   }, [cartItems]);

    const API_endpoint = 'http://localhost:5000/api/foods/';
    useEffect( () => {
     fetch(API_endpoint)
      .then((res) => res.json())
      .then((food) => (setFoods(Object.values(food)))); 
   }, []);
    
  return (
    <div className="App">
      <Header countCartItems = {cartItems.length}></Header>
      <div className="row">
        <Home 
          foods={foods}
          handleAdd={handleAdd}
        >
        </Home>
        <Basket
          cartItems = {cartItems}
          handleAdd={handleAdd}
          handleRemove = {handleRemove}
        ></Basket>
      </div>
      
    </div>
  );
}

export default App;

