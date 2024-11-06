import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCart, getAllwish } from "../../utility/utility";
import ButtonCards from "../ButtonCards/ButtonCards";
import Group from '../../assets/Group.png';

const Dashboard = () => {
    document.title = 'Gadget Heaven-Dashboard';
    const [gadget, setGadget] = useState([]);
    const [showWishlist, setShowWishlist] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const wish = getAllwish();
        setGadget(wish);
    }, []);

    const handleWishlistClick = () => {
        setShowWishlist(!showWishlist);
        setShowCart(false);
    };

    // Cart
    const [gadgets, setGadgets] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const cart = getAllCart();
        setGadgets(cart);
    }, []);

    const handleCartClick = () => {
        setShowCart(!showCart);
        setShowWishlist(false);
    };

    const totalCost = gadgets.reduce((acc, gadget) => acc + (gadget.price || 0), 0);

    const handleSort = () => {
        const sortedGadgets = [...gadgets].sort((a, b) => b.price - a.price);
        setGadgets(sortedGadgets);
    };

    const handlePurchase = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        localStorage.removeItem('cart');
        setGadgets([]); 
        setShowModal(false); 
        navigate('/'); 
    };
    

    return (
        <div>
            <div>
                <div className="text-center bg-[#9538E2] pb-14 pt-10">
                    <h1 className="text-3xl font-bold text-[#FFFFFF]">Dashboard</h1>
                    <p className="text-[#FFFFFF] mb-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className="flex gap-5 justify-center">
                        <button onClick={handleCartClick} className="btn rounded-full">Cart</button>
                        <button onClick={handleWishlistClick} className="btn btn-outline rounded-full text-white">Wishlist</button>
                    </div>
                </div>
                {showWishlist && (
                    <div className="ml-40">
                                            <h1 className="text-2xl font-bold my-10 ml-10">Cart</h1>
                    <div className="grid grid-cols-2 justify-center">
                        {gadget.map(gadget => (
                            <ButtonCards key={gadget.product_id} gadget={gadget} />
                        ))}
                    </div>
                        </div>
                )}
                {showCart && (
                    <div>
                        <div className="flex justify-between my-10">
                            <h1 className="text-2xl font-bold">Cart</h1>
                            <div className="flex gap-5">
                                <p className="mt-5 font-bold">Total cost: ${totalCost}</p>
                                <button onClick={handleSort} className="btn btn-outline bg-[#9538E2] rounded-full text-white">Sort by Price</button>
                                <button
                                    onClick={handlePurchase}
                                    className="btn btn-outline rounded-full"
                                    disabled={totalCost === 0}>Purchase</button>
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


            {showModal && (
                <dialog open className="modal">
                    <div className="modal-box text-center">
                        <img src={Group} alt="Success" className="flex justify-center mx-auto" />
                        <h3 className="font-bold text-lg">Payment Successfully</h3>
                        <p className="py-4">Thanks for purchasing.</p>
                        <p>Total: ${totalCost}</p>
                        <div className="modal-action flex justify-center mx-auto">
                            <button onClick={handleModalClose} className="btn rounded-full">Close</button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Dashboard;



