import { useEffect, useState } from "react"

export default function Carousel() {

    const [products,setProducts]=useState([])
    const [index,setIndex]=useState(0)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        .catch(err=>console.log(err))
    }, [])
    
    const handleIncrease=()=>{
        setIndex(prev=>prev+1)  
    }
    const handleDecrease=()=>{
        setIndex(prev=>prev-1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1));
        }, 3000);
    
        return () => clearInterval(interval);
      }, [index]); 
    

    console.log(index)
  return (
    <div className="carousel-image">
        {/* {
            products.length>0 &&(
                <img src={products[index].image} alt="" />
            )
        } */}
        <img src={products[index]?.image} alt="" />
        <button onClick={handleDecrease}>Prev</button>
        <button onClick={handleIncrease}>Next</button>
    </div>
  )
}
