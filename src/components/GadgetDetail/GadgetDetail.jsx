import { useLoaderData, useParams } from "react-router-dom"
import { GiSelfLove } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { addCart, addWish, getAllCart, getAllwish } from "../../utility/utility";
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";


const GadgetDetail = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const gadget = data.find(gadget => gadget.product_id === parseInt(product_id))
    const { product_title, product_image, category, price, description, Specification, availability, rating } = gadget;
    const [iswish, setIswish] = useState(false)
    useEffect(() => {
        const wishlist = getAllwish()
        const isExist = wishlist.find(it => it.product_id === gadget.product_id);
        if (isExist) {
            setIswish(true)
        }
    }, [])
    const handleWish = gadget => {
        addWish(gadget)
        setIswish(true)
    }


    const [isCart, setIsCart] = useState(false)
    useEffect(() => {
        const cart = getAllCart()
        const isExist = cart.find(it => it.product_id === gadget.product_id);
        if (isExist) {
            setIsCart(true)
        }
    }, [])
    const handleCart = gadgets => {
        addCart(gadgets)
        // setIsCart(true)
    }
    return (
        <div className="static ">
            <Toaster />
            <div className="text-center bg-[#9538E2] pb-32">
                <h1 className="text-2xl font-bold text-[#FFFFFF]">Product Details</h1>
                <p className="text-[#FFFFFF]">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="hero bg-[#FFFFFF] h-96 w-8/12 flex justify-center mx-auto  border-2 static -mt-20 rounded-2xl mb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={product_image}
                        className="max-w-sm h-80 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold mb-1">{product_title}</h1>
                        <p><span className="font-bold">Price: </span>${price}</p>
                        <button className="btn btn-outline btn-success rounded-full bg-[#309C081A] mt-1">In Stock</button>
                        <p>{description}</p>
                        <p className="font-bold">Specification:</p>
                        <p> <li>{Specification}</li></p>
                        <p><span className="font-bold">Rating ⭐: </span>{rating}</p>
                        <button onClick={() => handleCart(gadget)} className="btn btn-active text-[#FFFFFF] rounded-full bg-[#9538E2]">Add To Card <TiShoppingCart /></button>
                        <button disabled={iswish} onClick={() => handleWish(gadget)} className="btn btn-circle btn-outline bg-[#FFFFFF]">
                            <GiSelfLove className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GadgetDetail









