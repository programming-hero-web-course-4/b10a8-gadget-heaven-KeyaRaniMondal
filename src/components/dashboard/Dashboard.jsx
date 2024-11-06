import { useEffect, useState } from "react";
import { getAllCart, getAllwish } from "../../utility/utility";
import ButtonCards from "../ButtonCards/ButtonCards";

const Dashboard = () => {
    document.title='Gadget Heaven-Dashboard';
    const [gadget, setGadget] = useState([]);
    const [showWishlist, setShowWishlist] = useState(false);

    useEffect(() => {
        const wish = getAllwish();
        setGadget(wish);
    }, []);

    const handleWishlistClick = () => {
        setShowWishlist(!showWishlist);
        setShowCart(false);
    };

    // for cart
    const [gadgets, setGadgets] = useState([]);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        const cart = getAllCart();
        setGadgets(cart);
    }, []);

    const handleCartClick = () => {
        setShowCart(!showCart);
        setShowWishlist(false);
    };

const totalCost = gadgets.reduce((acc, gadget) => acc + (gadget.price || 0), 0);

const handleSort=()=>{
    const sortPrice=[...gadgets].sort((a,b)=>b.price-a.price);
    setGadgets(sortPrice);
}

    return (
        <div>
            <div>
                <div className="text-center bg-[#9538E2] pb-14">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className="flex gap-5 justify-center">
                        <button onClick={handleCartClick} className="btn rounded-full">Cart</button>
                        <button onClick={handleWishlistClick} className="btn btn-outline  rounded-full text-white">
                            Wishlist
                        </button>
                    </div>
                </div>
                {showWishlist && (
                    <div className="grid grid-cols-2">
                        {gadget.map(gadget => (
                            <ButtonCards key={gadget.product_id} gadget={gadget} />
                        ))}
                    </div>
                )}
                {showCart && (
                    <div>
                        <div className="flex justify-between my-10">
                            <h1 className="text-2xl font-bold">Cart</h1>
                            <div className="flex gap-5">
                                <p className="mt-5 font-bold">Total cost:${totalCost}</p>
                                <button onClick={handleSort} className="btn btn-outline bg-[#9538E2] rounded-full text-white">Sort by Price</button>
                                <button className="btn btn-outline  rounded-full">Purchase</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">

                            {gadgets.map(gadget => (
                                <ButtonCards key={gadget.product_id} gadget={gadget} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Dashboard;



