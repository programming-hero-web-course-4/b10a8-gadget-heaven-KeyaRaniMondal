import { Link, NavLink, Outlet } from "react-router-dom";

const CategoryName = ({ categories }) => {

    return (
        <div className="flex flex-col gap-5 my-5 p-5 bg-[#858eb6]">
            <div role="tablist" className="tabs tabs-boxed flex flex-col">
                {categories.map(categories => (
                    <NavLink key={categories.category} to={`/category/${categories.category}`} role="tab" className={({isActive})=>`tab ${isActive?'tab-active':''}`}>
                        {categories.category}
                     </NavLink>
                ))}
            </div>
        </div>
    )
}
export default CategoryName;

