import { useEffect, useState } from "react";
import Carousel from "../../Carousel/Carousel";
import  "../../Card/Card.css"
export default function Home() {
  const [products,setProducts]=useState([])
  const [filteredProducts,setFilteredProducts]=useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      setProducts(data)
      setFilteredProducts(data)
    })
    .catch(err=>console.log(err))
}, [])

  const handleAll=()=>{
    setFilteredProducts(products)
  }
  const handleFilterMens=()=>{
      const mensFilteredProducts=products.filter(products=>products.category==="men's clothing")
      setFilteredProducts(mensFilteredProducts)
  }
  return (
    <div className="home">
      <Carousel products={products}/>
      <div>
        <button onClick={handleAll}>All</button>
        <button onClick={handleFilterMens}>Mens</button>
      </div>
      <div className="grid-card">
        {
          filteredProducts?.map((product)=>(
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
