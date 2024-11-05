import { useEffect, useState } from "react"
import AllGadegts from "../AllGadegts/AllGadegts"
import CategoryName from "../CategoryName/categoryName"
import { useLoaderData } from "react-router-dom";

const Categories=()=>{
    const [gadget,setGadget]=useState([]);
    useEffect(()=>{
        fetch('../product.json')
        .then(res=>res.json())
        .then(data=>setGadget(data))
    },[])

    const categories=useLoaderData()

    return(
        <div>
        <h1 className="text-3xl text-[#0B0B0B] font-bold mt-20 mb-10 text-center">Explore Cutting-Edge Gadgets</h1>
        <div className="flex gap-20 justify-center">
            <div> <CategoryName categories={categories}></CategoryName></div>
            <div className="grid grid-cols-3 gap-y-3 gap-x-8">
        {
            gadget.map(gadgets=><AllGadegts key={gadgets.product_id}  gadgets={gadgets}></AllGadegts>)
        }
        </div> 
        </div>
    </div>
    )
}
export default Categories //ml-48  justify-end