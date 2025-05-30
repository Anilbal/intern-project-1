import { useEffect, useState } from "react";
import Carousel from "../../Carousel/Carousel";
import  "../../Card/Card.css"
export default function Home() {
  const [products,setProducts]=useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    .catch(err=>console.log(err))
}, [])

  return (
    <div className="home">
      <Carousel products={products}/>
      <div className="grid-card">
        {
          products?.map((product)=>(
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="card-details">
                  <h2>{product.title}</h2>
                  <p>{product.price}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
