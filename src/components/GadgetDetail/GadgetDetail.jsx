import { useLoaderData, useParams } from "react-router-dom"
import { GiSelfLove } from "react-icons/gi";

const GadgetDetail = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const gadget = data.find(gadget => gadget.product_id === parseInt(product_id))
    const { product_title, product_image, category, price, description, Specification, availability, rating } = gadget;
    return (
        <div className="static">
            <div className="text-center bg-[#9538E2] pb-32">
                <h1 className="text-2xl font-bold">Product Details</h1>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="hero bg-[#FFFFFF] h-96 min-w-full  border-2">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={product_image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{product_title}</h1>
                        <p>{price}</p>
                        <button className="btn btn-outline btn-success rounded-full">Success</button>
                        <p>{description}</p>
                        <p>{Specification}</p>
                        <p>{rating}</p>
                        <button className="btn btn-active btn-secondary rounded-full">Secondary</button>
                        <button className="btn btn-circle btn-outline bg-[#FFFFFF]">
                            <GiSelfLove className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GadgetDetail