import { Link, Outlet } from "react-router-dom";

const CategoryName = () => {

    return (
        <div className="flex flex-col gap-5 my-5 p-5 bg-[#858eb6]">
            <Link to={'/'}><button className="btn rounded-full">All Products</button></Link>
            <Link to><button className="btn rounded-full">computers</button></Link>
           <button className="btn rounded-full"> phones</button>
           <button className="btn rounded-full"> smart watches</button>
           <button className="btn rounded-full">chargers</button>
           <button className="btn rounded-full">power banks</button>
           {/* <Outlet></Outlet> */}
        </div>
    )
}
export default CategoryName;

