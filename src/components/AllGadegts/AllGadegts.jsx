import { Link, useLoaderData, useParams } from "react-router-dom";
import ButtonCards from "../ButtonCards/ButtonCards";
import { useEffect, useState } from "react";

const AllGadegts = () => {                
  const data=useLoaderData();
  const {category}=useParams();
  console.log(data)
const [product,setProduct]=useState([])
useEffect(()=>{
 if(category)
 {
  const filteredCategory=[...data].filter(gadget=>gadget.category===category)
  setProduct(filteredCategory)
 }
 else{
  setProduct(data)
 }
},[category,data])
  return (
    <div className="grid grid-cols-3 gap-y-3 gap-x-8">
{
  product.map(gadget=>(<ButtonCards key={gadget.product_id} gadget={gadget}></ButtonCards>))
}
    </div>
  )
}
export default AllGadegts


