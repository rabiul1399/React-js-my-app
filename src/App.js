import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:'Computer', price:57000},
    {name:'laptop', price:75000},
    {name:'Phone' ,price:9000},
  
  ]  


  return (
    <div className="App">
      {
           products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="Computer" price=""></Product>
      <Product name="Laptop" price="75000"></Product>
      <Product name="Phone" price="9000"></Product> */}


    </div>
  );
}



function Product(Props){
  return(
    <div className='product'>
      <h3>Name: {Props.name} </h3>
      <p>Price: {Props.price} </p>
    </div>
  )
}
export default App;
