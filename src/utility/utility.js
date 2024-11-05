import toast from "react-hot-toast/headless";

const getAllwish = () => {
    const all = localStorage.getItem('wishlist');
    if (all) {
        const wishlist = JSON.parse(all);
        return wishlist;
    } else {
        return [];
    }
};

const addWish = (gadgets) => {
    const wishlist = getAllwish();
    const isExist = wishlist.find(it => it.product_id === gadgets.product_id);
    if (isExist) {
        return toast.error('This gadget already exists!');
    }
    wishlist.push(gadgets);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    // toast.success('Successfully added!');
};

const getAllCart = () => {
    const all = localStorage.getItem('wishlist');
    if (all) {
        const wishlist = JSON.parse(all);
        return wishlist;
    } else {
        return [];
    }
};

const addCart= (gadgets) => {
    const wishlist = getAllwish();
    const isExist = wishlist.find(it => it.product_id === gadgets.product_id);
    if (isExist) {
        return toast.error('This gadget already exists!');
    }
    wishlist.push(gadgets);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    // toast.success('Successfully added!');
};

export { addWish, getAllwish };
